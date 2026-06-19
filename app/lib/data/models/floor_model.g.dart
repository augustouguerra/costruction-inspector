// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'floor_model.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$FloorModelImpl _$$FloorModelImplFromJson(Map<String, dynamic> json) =>
    _$FloorModelImpl(
      id: json['id'] as String,
      projectId: json['project_id'] as String,
      number: (json['number'] as num).toInt(),
      label: json['label'] as String,
      createdAt: DateTime.parse(json['created_at'] as String),
    );

Map<String, dynamic> _$$FloorModelImplToJson(_$FloorModelImpl instance) =>
    <String, dynamic>{
      'id': instance.id,
      'project_id': instance.projectId,
      'number': instance.number,
      'label': instance.label,
      'created_at': instance.createdAt.toIso8601String(),
    };
