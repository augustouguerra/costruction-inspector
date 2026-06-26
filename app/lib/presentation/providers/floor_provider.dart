import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../data/models/floor_model.dart';
import '../../data/repositories/floor_repository.dart';
import 'auth_provider.dart';

final floorRepositoryProvider = Provider<FloorRepository>(
  (ref) => FloorRepository(ref.watch(apiClientProvider)),
);

final floorsProvider =
    FutureProvider.family<List<FloorModel>, String>((ref, projectId) {
  return ref.read(floorRepositoryProvider).fetchFloors(projectId);
});
