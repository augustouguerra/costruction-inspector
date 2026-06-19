import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../data/models/apartment_model.dart';
import '../../data/repositories/apartment_repository.dart';

final apartmentRepositoryProvider =
    Provider<ApartmentRepository>((_) => ApartmentRepository());

final apartmentsProvider =
    FutureProvider.family<List<ApartmentModel>, String>((ref, floorId) {
  return ref.read(apartmentRepositoryProvider).fetchApartments(floorId);
});
