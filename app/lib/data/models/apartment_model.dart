import 'package:freezed_annotation/freezed_annotation.dart';

part 'apartment_model.freezed.dart';
part 'apartment_model.g.dart';

@freezed
class ApartmentModel with _$ApartmentModel {
  const factory ApartmentModel({
    required String id,
    required String floorId,
    required String identifier,
    required DateTime createdAt,
  }) = _ApartmentModel;

  factory ApartmentModel.fromJson(Map<String, dynamic> json) =>
      _$ApartmentModelFromJson(json);
}
