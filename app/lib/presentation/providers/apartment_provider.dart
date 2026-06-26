import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../data/models/apartment_model.dart';
import '../../data/repositories/apartment_repository.dart';
import 'auth_provider.dart';

final apartmentRepositoryProvider = Provider<ApartmentRepository>(
  (ref) => ApartmentRepository(ref.watch(apiClientProvider)),
);

final apartmentsProvider =
    FutureProvider.family<List<ApartmentModel>, String>((ref, floorId) {
  return ref.read(apartmentRepositoryProvider).fetchApartments(floorId);
});
