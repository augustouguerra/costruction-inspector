import 'package:supabase_flutter/supabase_flutter.dart';

import '../models/room_model.dart';

class RoomRepository {
  final _client = Supabase.instance.client;

  Future<List<RoomModel>> fetchRooms(String apartmentId) async {
    final data = await _client
        .from('rooms')
        .select()
        .eq('apartment_id', apartmentId)
        .order('name');
    return data.map<RoomModel>(RoomModel.fromJson).toList();
  }

  Future<RoomModel> createRoom({
    required String apartmentId,
    required String name,
  }) async {
    final data = await _client.from('rooms').insert({
      'apartment_id': apartmentId,
      'name': name,
    }).select().single();
    return RoomModel.fromJson(data);
  }

  Future<void> deleteRoom(String roomId) =>
      _client.from('rooms').delete().eq('id', roomId);
}
