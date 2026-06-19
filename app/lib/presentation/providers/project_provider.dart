import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../data/models/project_model.dart';
import '../../data/repositories/project_repository.dart';

final projectRepositoryProvider =
    Provider<ProjectRepository>((_) => ProjectRepository());

final projectsProvider = FutureProvider<List<ProjectModel>>((ref) {
  return ref.read(projectRepositoryProvider).fetchProjects();
});
