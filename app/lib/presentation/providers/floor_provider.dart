import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../data/models/floor_model.dart';
import '../../data/repositories/floor_repository.dart';

final floorRepositoryProvider =
    Provider<FloorRepository>((_) => FloorRepository());

final floorsProvider =
    FutureProvider.family<List<FloorModel>, String>((ref, projectId) {
  return ref.read(floorRepositoryProvider).fetchFloors(projectId);
});
