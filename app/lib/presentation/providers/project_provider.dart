import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../data/models/project_model.dart';
import '../../data/repositories/project_repository.dart';
import 'auth_provider.dart';

final projectRepositoryProvider = Provider<ProjectRepository>(
  (ref) => ProjectRepository(ref.watch(apiClientProvider)),
);

final projectsProvider = FutureProvider<List<ProjectModel>>((ref) {
  ref.watch(authTokenProvider);
  return ref.read(projectRepositoryProvider).fetchProjects();
});

final projectProvider =
    FutureProvider.family<ProjectModel, String>((ref, projectId) {
  return ref.read(projectRepositoryProvider).fetchProject(projectId);
});
