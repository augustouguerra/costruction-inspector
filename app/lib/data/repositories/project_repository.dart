import '../../core/services/api_client.dart';
import '../models/project_model.dart';

class ProjectRepository {
  final ApiClient _api;
  ProjectRepository(this._api);

  Future<List<ProjectModel>> fetchProjects() async {
    final res = await _api.dio.get('/projects');
    return (res.data as List).map((e) => ProjectModel.fromJson(e as Map<String, dynamic>)).toList();
  }

  Future<ProjectModel> fetchProject(String projectId) async {
    final res = await _api.dio.get('/projects/$projectId');
    return ProjectModel.fromJson(res.data as Map<String, dynamic>);
  }

  Future<ProjectModel> createProject({
    required String name,
    String? address,
    String? description,
  }) async {
    final res = await _api.dio.post('/projects', data: {
      'name': name,
      if (address != null) 'address': address,
      if (description != null) 'description': description,
    });
    return ProjectModel.fromJson(res.data as Map<String, dynamic>);
  }

  Future<void> deleteProject(String projectId) =>
      _api.dio.delete('/projects/$projectId');
}
