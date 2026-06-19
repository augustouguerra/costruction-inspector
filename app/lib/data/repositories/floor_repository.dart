import 'package:supabase_flutter/supabase_flutter.dart';

import '../models/floor_model.dart';

class FloorRepository {
  final _client = Supabase.instance.client;

  Future<List<FloorModel>> fetchFloors(String projectId) async {
    final data = await _client
        .from('floors')
        .select()
        .eq('project_id', projectId)
        .order('number');
    return data.map<FloorModel>(FloorModel.fromJson).toList();
  }

  Future<FloorModel> createFloor({
    required String projectId,
    required int number,
    required String label,
  }) async {
    final data = await _client.from('floors').insert({
      'project_id': projectId,
      'number': number,
      'label': label,
    }).select().single();
    return FloorModel.fromJson(data);
  }

  Future<void> deleteFloor(String floorId) =>
      _client.from('floors').delete().eq('id', floorId);
}
