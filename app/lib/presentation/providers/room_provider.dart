import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../data/models/room_model.dart';
import '../../data/repositories/room_repository.dart';
import 'auth_provider.dart';

final roomRepositoryProvider = Provider<RoomRepository>(
  (ref) => RoomRepository(ref.watch(apiClientProvider)),
);

final roomsProvider =
    FutureProvider.family<List<RoomModel>, String>((ref, apartmentId) {
  return ref.read(roomRepositoryProvider).fetchRooms(apartmentId);
});
