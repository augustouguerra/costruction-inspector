// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'apartment_model.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$ApartmentModelImpl _$$ApartmentModelImplFromJson(Map<String, dynamic> json) =>
    _$ApartmentModelImpl(
      id: json['id'] as String,
      floorId: json['floor_id'] as String,
      identifier: json['identifier'] as String,
      createdAt: DateTime.parse(json['created_at'] as String),
    );

Map<String, dynamic> _$$ApartmentModelImplToJson(
        _$ApartmentModelImpl instance) =>
    <String, dynamic>{
      'id': instance.id,
      'floor_id': instance.floorId,
      'identifier': instance.identifier,
      'created_at': instance.createdAt.toIso8601String(),
    };
