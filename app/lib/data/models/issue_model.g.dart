// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'issue_model.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$IssueModelImpl _$$IssueModelImplFromJson(Map<String, dynamic> json) =>
    _$IssueModelImpl(
      id: json['id'] as String,
      roomId: json['room_id'] as String,
      createdBy: json['created_by'] as String,
      assignedTrade:
          $enumDecodeNullable(_$TradeTypeEnumMap, json['assigned_trade']) ??
              TradeType.unknown,
      assignedTo: json['assigned_to'] as String?,
      status: $enumDecodeNullable(_$IssueStatusEnumMap, json['status']) ??
          IssueStatus.open,
      title: json['title'] as String?,
      description: json['description'] as String?,
      priority: (json['priority'] as num?)?.toInt() ?? 2,
      resolvedAt: json['resolved_at'] == null
          ? null
          : DateTime.parse(json['resolved_at'] as String),
      createdAt: DateTime.parse(json['created_at'] as String),
      updatedAt: DateTime.parse(json['updated_at'] as String),
      photoUrls: (json['photo_urls'] as List<dynamic>?)
              ?.map((e) => e as String)
              .toList() ??
          const [],
      audioUrls: (json['audio_urls'] as List<dynamic>?)
              ?.map((e) => e as String)
              .toList() ??
          const [],
    );

Map<String, dynamic> _$$IssueModelImplToJson(_$IssueModelImpl instance) =>
    <String, dynamic>{
      'id': instance.id,
      'room_id': instance.roomId,
      'created_by': instance.createdBy,
      'assigned_trade': _$TradeTypeEnumMap[instance.assignedTrade]!,
      'assigned_to': instance.assignedTo,
      'status': _$IssueStatusEnumMap[instance.status]!,
      'title': instance.title,
      'description': instance.description,
      'priority': instance.priority,
      'resolved_at': instance.resolvedAt?.toIso8601String(),
      'created_at': instance.createdAt.toIso8601String(),
      'updated_at': instance.updatedAt.toIso8601String(),
      'photo_urls': instance.photoUrls,
      'audio_urls': instance.audioUrls,
    };

const _$TradeTypeEnumMap = {
  TradeType.plumber: 'plumber',
  TradeType.electrician: 'electrician',
  TradeType.carpenter: 'carpenter',
  TradeType.painter: 'painter',
  TradeType.hvac: 'hvac',
  TradeType.mason: 'mason',
  TradeType.tiler: 'tiler',
  TradeType.glazier: 'glazier',
  TradeType.general: 'general',
  TradeType.unknown: 'unknown',
};

const _$IssueStatusEnumMap = {
  IssueStatus.open: 'open',
  IssueStatus.acknowledged: 'acknowledged',
  IssueStatus.inProgress: 'inProgress',
  IssueStatus.resolved: 'resolved',
  IssueStatus.rejected: 'rejected',
};
