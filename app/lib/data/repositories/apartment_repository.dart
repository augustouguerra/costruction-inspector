import '../../core/services/api_client.dart';
import '../models/apartment_model.dart';

class ApartmentRepository {
  final ApiClient _api;
  ApartmentRepository(this._api);

  Future<List<ApartmentModel>> fetchApartments(String floorId) async {
    final res = await _api.dio.get('/floors/$floorId/apartments');
    return (res.data as List).map((e) => ApartmentModel.fromJson(e as Map<String, dynamic>)).toList();
  }

  Future<ApartmentModel> createApartment({
    required String floorId,
    required String identifier,
  }) async {
    final res = await _api.dio.post('/floors/$floorId/apartments', data: {
      'identifier': identifier,
    });
    return ApartmentModel.fromJson(res.data as Map<String, dynamic>);
  }

  Future<void> deleteApartment(String apartmentId) =>
      _api.dio.delete('/apartments/$apartmentId');
}
