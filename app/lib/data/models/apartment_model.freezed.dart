// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'apartment_model.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#adding-getters-and-methods-to-our-models');

ApartmentModel _$ApartmentModelFromJson(Map<String, dynamic> json) {
  return _ApartmentModel.fromJson(json);
}

/// @nodoc
mixin _$ApartmentModel {
  String get id => throw _privateConstructorUsedError;
  String get floorId => throw _privateConstructorUsedError;
  String get identifier => throw _privateConstructorUsedError;
  DateTime get createdAt => throw _privateConstructorUsedError;

  /// Serializes this ApartmentModel to a JSON map.
  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;

  /// Create a copy of ApartmentModel
  /// with the given fields replaced by the non-null parameter values.
  @JsonKey(includeFromJson: false, includeToJson: false)
  $ApartmentModelCopyWith<ApartmentModel> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $ApartmentModelCopyWith<$Res> {
  factory $ApartmentModelCopyWith(
          ApartmentModel value, $Res Function(ApartmentModel) then) =
      _$ApartmentModelCopyWithImpl<$Res, ApartmentModel>;
  @useResult
  $Res call({String id, String floorId, String identifier, DateTime createdAt});
}

/// @nodoc
class _$ApartmentModelCopyWithImpl<$Res, $Val extends ApartmentModel>
    implements $ApartmentModelCopyWith<$Res> {
  _$ApartmentModelCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  /// Create a copy of ApartmentModel
  /// with the given fields replaced by the non-null parameter values.
  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? id = null,
    Object? floorId = null,
    Object? identifier = null,
    Object? createdAt = null,
  }) {
    return _then(_value.copyWith(
      id: null == id
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as String,
      floorId: null == floorId
          ? _value.floorId
          : floorId // ignore: cast_nullable_to_non_nullable
              as String,
      identifier: null == identifier
          ? _value.identifier
          : identifier // ignore: cast_nullable_to_non_nullable
              as String,
      createdAt: null == createdAt
          ? _value.createdAt
          : createdAt // ignore: cast_nullable_to_non_nullable
              as DateTime,
    ) as $Val);
  }
}

/// @nodoc
abstract class _$$ApartmentModelImplCopyWith<$Res>
    implements $ApartmentModelCopyWith<$Res> {
  factory _$$ApartmentModelImplCopyWith(_$ApartmentModelImpl value,
          $Res Function(_$ApartmentModelImpl) then) =
      __$$ApartmentModelImplCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call({String id, String floorId, String identifier, DateTime createdAt});
}

/// @nodoc
class __$$ApartmentModelImplCopyWithImpl<$Res>
    extends _$ApartmentModelCopyWithImpl<$Res, _$ApartmentModelImpl>
    implements _$$ApartmentModelImplCopyWith<$Res> {
  __$$ApartmentModelImplCopyWithImpl(
      _$ApartmentModelImpl _value, $Res Function(_$ApartmentModelImpl) _then)
      : super(_value, _then);

  /// Create a copy of ApartmentModel
  /// with the given fields replaced by the non-null parameter values.
  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? id = null,
    Object? floorId = null,
    Object? identifier = null,
    Object? createdAt = null,
  }) {
    return _then(_$ApartmentModelImpl(
      id: null == id
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as String,
      floorId: null == floorId
          ? _value.floorId
          : floorId // ignore: cast_nullable_to_non_nullable
              as String,
      identifier: null == identifier
          ? _value.identifier
          : identifier // ignore: cast_nullable_to_non_nullable
              as String,
      createdAt: null == createdAt
          ? _value.createdAt
          : createdAt // ignore: cast_nullable_to_non_nullable
              as DateTime,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$ApartmentModelImpl implements _ApartmentModel {
  const _$ApartmentModelImpl(
      {required this.id,
      required this.floorId,
      required this.identifier,
      required this.createdAt});

  factory _$ApartmentModelImpl.fromJson(Map<String, dynamic> json) =>
      _$$ApartmentModelImplFromJson(json);

  @override
  final String id;
  @override
  final String floorId;
  @override
  final String identifier;
  @override
  final DateTime createdAt;

  @override
  String toString() {
    return 'ApartmentModel(id: $id, floorId: $floorId, identifier: $identifier, createdAt: $createdAt)';
  }

  @override
  bool operator ==(Object other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$ApartmentModelImpl &&
            (identical(other.id, id) || other.id == id) &&
            (identical(other.floorId, floorId) || other.floorId == floorId) &&
            (identical(other.identifier, identifier) ||
                other.identifier == identifier) &&
            (identical(other.createdAt, createdAt) ||
                other.createdAt == createdAt));
  }

  @JsonKey(includeFromJson: false, includeToJson: false)
  @override
  int get hashCode =>
      Object.hash(runtimeType, id, floorId, identifier, createdAt);

  /// Create a copy of ApartmentModel
  /// with the given fields replaced by the non-null parameter values.
  @JsonKey(includeFromJson: false, includeToJson: false)
  @override
  @pragma('vm:prefer-inline')
  _$$ApartmentModelImplCopyWith<_$ApartmentModelImpl> get copyWith =>
      __$$ApartmentModelImplCopyWithImpl<_$ApartmentModelImpl>(
          this, _$identity);

  @override
  Map<String, dynamic> toJson() {
    return _$$ApartmentModelImplToJson(
      this,
    );
  }
}

abstract class _ApartmentModel implements ApartmentModel {
  const factory _ApartmentModel(
      {required final String id,
      required final String floorId,
      required final String identifier,
      required final DateTime createdAt}) = _$ApartmentModelImpl;

  factory _ApartmentModel.fromJson(Map<String, dynamic> json) =
      _$ApartmentModelImpl.fromJson;

  @override
  String get id;
  @override
  String get floorId;
  @override
  String get identifier;
  @override
  DateTime get createdAt;

  /// Create a copy of ApartmentModel
  /// with the given fields replaced by the non-null parameter values.
  @override
  @JsonKey(includeFromJson: false, includeToJson: false)
  _$$ApartmentModelImplCopyWith<_$ApartmentModelImpl> get copyWith =>
      throw _privateConstructorUsedError;
}
