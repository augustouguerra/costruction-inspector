import 'package:supabase_flutter/supabase_flutter.dart';

import '../models/project_model.dart';

class ProjectRepository {
  final _client = Supabase.instance.client;

  Stream<List<ProjectModel>> watchProjects() {
    return _client
        .from('projects')
        .stream(primaryKey: ['id'])
        .map((rows) => rows.map(ProjectModel.fromJson).toList());
  }

  Future<List<ProjectModel>> fetchProjects() async {
    final ownerId = _client.auth.currentUser!.id;
    final data = await _client
        .from('projects')
        .select()
        .eq('owner_id', ownerId)
        .order('created_at', ascending: false);
    return data.map<ProjectModel>(ProjectModel.fromJson).toList();
  }

  Future<ProjectModel> createProject({
    required String name,
    String? address,
    String? description,
  }) async {
    final userId = _client.auth.currentUser!.id;

    // Ensure user_profiles row exists. Users who registered before the DB
    // trigger was added won't have one, which breaks the projects FK.
    final meta = _client.auth.currentUser?.userMetadata ?? {};
    await _client.from('user_profiles').upsert(
      {
        'id': userId,
        'full_name': meta['full_name'] ?? 'Unknown',
        'role': meta['role'] ?? 'architect',
        if (meta['trade'] != null && (meta['trade'] as String).isNotEmpty)
          'trade': meta['trade'],
      },
      onConflict: 'id',
    );

    final data = await _client.from('projects').insert({
      'name': name,
      'address': address,
      'description': description,
      'owner_id': userId,
    }).select().single();
    await _client.from('project_members').insert({
      'project_id': data['id'],
      'user_id': userId,
      'role': 'architect',
    });
    return ProjectModel.fromJson(data);
  }

  Future<void> deleteProject(String projectId) =>
      _client.from('projects').delete().eq('id', projectId);
}
