import '../../core/services/api_client.dart';
import '../models/floor_model.dart';

class FloorRepository {
  final ApiClient _api;
  FloorRepository(this._api);

  Future<List<FloorModel>> fetchFloors(String projectId) async {
    final res = await _api.dio.get('/projects/$projectId/floors');
    return (res.data as List).map((e) => FloorModel.fromJson(e as Map<String, dynamic>)).toList();
  }

  Future<FloorModel> createFloor({
    required String projectId,
    required int number,
    required String label,
  }) async {
    final res = await _api.dio.post('/projects/$projectId/floors', data: {
      'number': number,
      'label': label,
    });
    return FloorModel.fromJson(res.data as Map<String, dynamic>);
  }

  Future<void> deleteFloor(String floorId) =>
      _api.dio.delete('/floors/$floorId');
}
