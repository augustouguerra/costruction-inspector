// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'user_profile_model.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$UserProfileModelImpl _$$UserProfileModelImplFromJson(
        Map<String, dynamic> json) =>
    _$UserProfileModelImpl(
      id: json['id'] as String,
      fullName: json['full_name'] as String,
      role: $enumDecodeNullable(_$UserRoleEnumMap, json['role']) ??
          UserRole.tradesperson,
      trade: $enumDecodeNullable(_$TradeTypeEnumMap, json['trade']),
      avatarUrl: json['avatar_url'] as String?,
      phone: json['phone'] as String?,
      createdAt: DateTime.parse(json['created_at'] as String),
      updatedAt: DateTime.parse(json['updated_at'] as String),
    );

Map<String, dynamic> _$$UserProfileModelImplToJson(
        _$UserProfileModelImpl instance) =>
    <String, dynamic>{
      'id': instance.id,
      'full_name': instance.fullName,
      'role': _$UserRoleEnumMap[instance.role]!,
      'trade': _$TradeTypeEnumMap[instance.trade],
      'avatar_url': instance.avatarUrl,
      'phone': instance.phone,
      'created_at': instance.createdAt.toIso8601String(),
      'updated_at': instance.updatedAt.toIso8601String(),
    };

const _$UserRoleEnumMap = {
  UserRole.architect: 'architect',
  UserRole.tradesperson: 'tradesperson',
  UserRole.projectManager: 'projectManager',
  UserRole.admin: 'admin',
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
