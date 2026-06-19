import 'package:supabase_flutter/supabase_flutter.dart';

import '../models/issue_model.dart';
import '../../domain/enums/issue_status.dart';
import '../../domain/enums/trade_type.dart';

class IssueRepository {
  final _client = Supabase.instance.client;

  Future<List<IssueModel>> fetchIssues(String roomId) async {
    final data = await _client
        .from('issues')
        .select()
        .eq('room_id', roomId)
        .order('created_at', ascending: false);
    return data.map<IssueModel>(IssueModel.fromJson).toList();
  }

  Future<IssueModel> createIssue({required String roomId}) async {
    final userId = _client.auth.currentUser!.id;
    final now = DateTime.now().toIso8601String();
    final data = await _client.from('issues').insert({
      'room_id': roomId,
      'created_by': userId,
      'assigned_trade': TradeType.unknown.name,
      'status': IssueStatus.open.toDbString(),
      'created_at': now,
      'updated_at': now,
    }).select().single();
    return IssueModel.fromJson(data);
  }

  Future<void> updateAudioUrl(String issueId, String audioUrl) =>
      _client.from('issues').update({
        'audio_file_url': audioUrl,
        'updated_at': DateTime.now().toIso8601String(),
      }).eq('id', issueId);

  Future<void> updateStatus(String issueId, IssueStatus status) =>
      _client.from('issues').update({
        'status': status.toDbString(),
        'updated_at': DateTime.now().toIso8601String(),
        if (status == IssueStatus.resolved)
          'resolved_at': DateTime.now().toIso8601String(),
      }).eq('id', issueId);

  Future<void> addPhoto(String issueId, String storagePath) async {
    final userId = _client.auth.currentUser!.id;
    await _client.from('issue_photos').insert({
      'issue_id': issueId,
      'storage_path': storagePath,
      'uploaded_by': userId,
    });
  }

  Future<List<String>> fetchPhotoUrls(String issueId) async {
    final data = await _client
        .from('issue_photos')
        .select('storage_path')
        .eq('issue_id', issueId)
        .order('created_at');
    return data.map<String>((row) {
      final path = row['storage_path'] as String;
      return _client.storage.from('issue-photos').getPublicUrl(path);
    }).toList();
  }

  Future<IssueModel?> fetchIssue(String issueId) async {
    final data = await _client
        .from('issues')
        .select()
        .eq('id', issueId)
        .maybeSingle();
    if (data == null) return null;
    return IssueModel.fromJson(data);
  }

  Future<void> deleteIssue(String issueId) =>
      _client.from('issues').delete().eq('id', issueId);
}
