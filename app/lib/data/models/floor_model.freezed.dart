// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'floor_model.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#adding-getters-and-methods-to-our-models');

FloorModel _$FloorModelFromJson(Map<String, dynamic> json) {
  return _FloorModel.fromJson(json);
}

/// @nodoc
mixin _$FloorModel {
  String get id => throw _privateConstructorUsedError;
  String get projectId => throw _privateConstructorUsedError;
  int get number => throw _privateConstructorUsedError;
  String get label => throw _privateConstructorUsedError;
  DateTime get createdAt => throw _privateConstructorUsedError;

  /// Serializes this FloorModel to a JSON map.
  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;

  /// Create a copy of FloorModel
  /// with the given fields replaced by the non-null parameter values.
  @JsonKey(includeFromJson: false, includeToJson: false)
  $FloorModelCopyWith<FloorModel> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $FloorModelCopyWith<$Res> {
  factory $FloorModelCopyWith(
          FloorModel value, $Res Function(FloorModel) then) =
      _$FloorModelCopyWithImpl<$Res, FloorModel>;
  @useResult
  $Res call(
      {String id,
      String projectId,
      int number,
      String label,
      DateTime createdAt});
}

/// @nodoc
class _$FloorModelCopyWithImpl<$Res, $Val extends FloorModel>
    implements $FloorModelCopyWith<$Res> {
  _$FloorModelCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  /// Create a copy of FloorModel
  /// with the given fields replaced by the non-null parameter values.
  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? id = null,
    Object? projectId = null,
    Object? number = null,
    Object? label = null,
    Object? createdAt = null,
  }) {
    return _then(_value.copyWith(
      id: null == id
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as String,
      projectId: null == projectId
          ? _value.projectId
          : projectId // ignore: cast_nullable_to_non_nullable
              as String,
      number: null == number
          ? _value.number
          : number // ignore: cast_nullable_to_non_nullable
              as int,
      label: null == label
          ? _value.label
          : label // ignore: cast_nullable_to_non_nullable
              as String,
      createdAt: null == createdAt
          ? _value.createdAt
          : createdAt // ignore: cast_nullable_to_non_nullable
              as DateTime,
    ) as $Val);
  }
}

/// @nodoc
abstract class _$$FloorModelImplCopyWith<$Res>
    implements $FloorModelCopyWith<$Res> {
  factory _$$FloorModelImplCopyWith(
          _$FloorModelImpl value, $Res Function(_$FloorModelImpl) then) =
      __$$FloorModelImplCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call(
      {String id,
      String projectId,
      int number,
      String label,
      DateTime createdAt});
}

/// @nodoc
class __$$FloorModelImplCopyWithImpl<$Res>
    extends _$FloorModelCopyWithImpl<$Res, _$FloorModelImpl>
    implements _$$FloorModelImplCopyWith<$Res> {
  __$$FloorModelImplCopyWithImpl(
      _$FloorModelImpl _value, $Res Function(_$FloorModelImpl) _then)
      : super(_value, _then);

  /// Create a copy of FloorModel
  /// with the given fields replaced by the non-null parameter values.
  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? id = null,
    Object? projectId = null,
    Object? number = null,
    Object? label = null,
    Object? createdAt = null,
  }) {
    return _then(_$FloorModelImpl(
      id: null == id
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as String,
      projectId: null == projectId
          ? _value.projectId
          : projectId // ignore: cast_nullable_to_non_nullable
              as String,
      number: null == number
          ? _value.number
          : number // ignore: cast_nullable_to_non_nullable
              as int,
      label: null == label
          ? _value.label
          : label // ignore: cast_nullable_to_non_nullable
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
class _$FloorModelImpl implements _FloorModel {
  const _$FloorModelImpl(
      {required this.id,
      required this.projectId,
      required this.number,
      required this.label,
      required this.createdAt});

  factory _$FloorModelImpl.fromJson(Map<String, dynamic> json) =>
      _$$FloorModelImplFromJson(json);

  @override
  final String id;
  @override
  final String projectId;
  @override
  final int number;
  @override
  final String label;
  @override
  final DateTime createdAt;

  @override
  String toString() {
    return 'FloorModel(id: $id, projectId: $projectId, number: $number, label: $label, createdAt: $createdAt)';
  }

  @override
  bool operator ==(Object other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$FloorModelImpl &&
            (identical(other.id, id) || other.id == id) &&
            (identical(other.projectId, projectId) ||
                other.projectId == projectId) &&
            (identical(other.number, number) || other.number == number) &&
            (identical(other.label, label) || other.label == label) &&
            (identical(other.createdAt, createdAt) ||
                other.createdAt == createdAt));
  }

  @JsonKey(includeFromJson: false, includeToJson: false)
  @override
  int get hashCode =>
      Object.hash(runtimeType, id, projectId, number, label, createdAt);

  /// Create a copy of FloorModel
  /// with the given fields replaced by the non-null parameter values.
  @JsonKey(includeFromJson: false, includeToJson: false)
  @override
  @pragma('vm:prefer-inline')
  _$$FloorModelImplCopyWith<_$FloorModelImpl> get copyWith =>
      __$$FloorModelImplCopyWithImpl<_$FloorModelImpl>(this, _$identity);

  @override
  Map<String, dynamic> toJson() {
    return _$$FloorModelImplToJson(
      this,
    );
  }
}

abstract class _FloorModel implements FloorModel {
  const factory _FloorModel(
      {required final String id,
      required final String projectId,
      required final int number,
      required final String label,
      required final DateTime createdAt}) = _$FloorModelImpl;

  factory _FloorModel.fromJson(Map<String, dynamic> json) =
      _$FloorModelImpl.fromJson;

  @override
  String get id;
  @override
  String get projectId;
  @override
  int get number;
  @override
  String get label;
  @override
  DateTime get createdAt;

  /// Create a copy of FloorModel
  /// with the given fields replaced by the non-null parameter values.
  @override
  @JsonKey(includeFromJson: false, includeToJson: false)
  _$$FloorModelImplCopyWith<_$FloorModelImpl> get copyWith =>
      throw _privateConstructorUsedError;
}
