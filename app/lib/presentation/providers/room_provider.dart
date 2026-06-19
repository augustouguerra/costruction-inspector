import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../data/models/room_model.dart';
import '../../data/repositories/room_repository.dart';

final roomRepositoryProvider =
    Provider<RoomRepository>((_) => RoomRepository());

final roomsProvider =
    FutureProvider.family<List<RoomModel>, String>((ref, apartmentId) {
  return ref.read(roomRepositoryProvider).fetchRooms(apartmentId);
});
