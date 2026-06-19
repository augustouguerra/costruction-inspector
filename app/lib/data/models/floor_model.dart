import 'package:freezed_annotation/freezed_annotation.dart';

part 'floor_model.freezed.dart';
part 'floor_model.g.dart';

@freezed
class FloorModel with _$FloorModel {
  const factory FloorModel({
    required String id,
    required String projectId,
    required int number,
    required String label,
    required DateTime createdAt,
  }) = _FloorModel;

  factory FloorModel.fromJson(Map<String, dynamic> json) =>
      _$FloorModelFromJson(json);
}
