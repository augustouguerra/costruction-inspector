import 'package:supabase_flutter/supabase_flutter.dart';

import '../models/apartment_model.dart';

class ApartmentRepository {
  final _client = Supabase.instance.client;

  Future<List<ApartmentModel>> fetchApartments(String floorId) async {
    final data = await _client
        .from('apartments')
        .select()
        .eq('floor_id', floorId)
        .order('identifier');
    return data.map<ApartmentModel>(ApartmentModel.fromJson).toList();
  }

  Future<ApartmentModel> createApartment({
    required String floorId,
    required String identifier,
  }) async {
    final data = await _client.from('apartments').insert({
      'floor_id': floorId,
      'identifier': identifier,
    }).select().single();
    return ApartmentModel.fromJson(data);
  }

  Future<void> deleteApartment(String apartmentId) =>
      _client.from('apartments').delete().eq('id', apartmentId);
}
