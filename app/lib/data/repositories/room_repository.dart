import '../../core/services/api_client.dart';
import '../models/room_model.dart';

class RoomRepository {
  final ApiClient _api;
  RoomRepository(this._api);

  Future<List<RoomModel>> fetchRooms(String apartmentId) async {
    final res = await _api.dio.get('/apartments/$apartmentId/rooms');
    return (res.data as List).map((e) => RoomModel.fromJson(e as Map<String, dynamic>)).toList();
  }

  Future<RoomModel> createRoom({
    required String apartmentId,
    required String name,
  }) async {
    final res = await _api.dio.post('/apartments/$apartmentId/rooms', data: {
      'name': name,
    });
    return RoomModel.fromJson(res.data as Map<String, dynamic>);
  }

  Future<void> deleteRoom(String roomId) =>
      _api.dio.delete('/rooms/$roomId');
}
