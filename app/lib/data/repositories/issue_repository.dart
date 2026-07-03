import 'package:dio/dio.dart';
import '../../core/services/api_client.dart';
import '../models/issue_model.dart';
import '../../domain/enums/issue_status.dart';

class IssueDocumentInfo {
  final String url;
  final String fileName;
  const IssueDocumentInfo({required this.url, required this.fileName});
}

class IssueRepository {
  final ApiClient _api;
  IssueRepository(this._api);

  Future<List<IssueModel>> fetchIssues(String roomId) async {
    final res = await _api.dio.get('/rooms/$roomId/issues');
    return (res.data as List).map((e) => IssueModel.fromJson(e as Map<String, dynamic>)).toList();
  }

  Future<IssueModel> createIssue({required String roomId}) async {
    final res = await _api.dio.post('/issues', data: {'roomId': roomId});
    return IssueModel.fromJson(res.data as Map<String, dynamic>);
  }

  Future<void> updateStatus(String issueId, IssueStatus status) async {
    await _api.dio.patch('/issues/$issueId/status', data: {
      'status': status.toDbString(),
    });
  }

  Future<void> uploadAudio(String issueId, String localPath) async {
    final formData = FormData.fromMap({
      'audio': await MultipartFile.fromFile(localPath, filename: 'recording.m4a'),
    });
    await _api.dio.post(
      '/issues/$issueId/audio',
      data: formData,
      options: Options(contentType: 'multipart/form-data'),
    );
  }

  Future<List<String>> fetchAudioUrls(String issueId) async {
    final res = await _api.dio.get('/issues/$issueId/audio');
    final baseUrl = _api.dio.options.baseUrl.replaceAll('/api', '');
    return (res.data as List).map((e) => '$baseUrl${e['url']}').toList();
  }

  Future<void> addPhoto(String issueId, String localPath) async {
    final formData = FormData.fromMap({
      'photo': await MultipartFile.fromFile(localPath),
    });
    await _api.dio.post(
      '/issues/$issueId/photos',
      data: formData,
      options: Options(contentType: 'multipart/form-data'),
    );
  }

  Future<List<String>> fetchPhotoUrls(String issueId) async {
    final res = await _api.dio.get('/issues/$issueId/photos');
    final baseUrl = _api.dio.options.baseUrl.replaceAll('/api', '');
    return (res.data as List).map((e) => '$baseUrl${e['url']}').toList();
  }

  Future<void> addDocument(String issueId, String localPath, {String? fileName}) async {
    final formData = FormData.fromMap({
      'document': await MultipartFile.fromFile(localPath, filename: fileName),
    });
    await _api.dio.post(
      '/issues/$issueId/documents',
      data: formData,
      options: Options(contentType: 'multipart/form-data'),
    );
  }

  Future<List<IssueDocumentInfo>> fetchDocuments(String issueId) async {
    final res = await _api.dio.get('/issues/$issueId/documents');
    final baseUrl = _api.dio.options.baseUrl.replaceAll('/api', '');
    return (res.data as List)
        .map((e) => IssueDocumentInfo(
              url: '$baseUrl${e['url']}',
              fileName: e['file_name'] as String? ?? (e['url'] as String).split('/').last,
            ))
        .toList();
  }

  Future<IssueModel?> fetchIssue(String issueId) async {
    final res = await _api.dio.get('/issues/$issueId');
    return IssueModel.fromJson(res.data as Map<String, dynamic>);
  }

  Future<void> deleteIssue(String issueId) =>
      _api.dio.delete('/issues/$issueId');
}
