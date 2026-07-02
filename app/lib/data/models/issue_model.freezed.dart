// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'issue_model.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#adding-getters-and-methods-to-our-models');

IssueModel _$IssueModelFromJson(Map<String, dynamic> json) {
  return _IssueModel.fromJson(json);
}

/// @nodoc
mixin _$IssueModel {
  String get id => throw _privateConstructorUsedError;
  String get roomId => throw _privateConstructorUsedError;
  String get createdBy => throw _privateConstructorUsedError;
  TradeType get assignedTrade => throw _privateConstructorUsedError;
  String? get assignedTo => throw _privateConstructorUsedError;
  @JsonKey(fromJson: IssueStatus.fromString, toJson: _issueStatusToJson)
  IssueStatus get status => throw _privateConstructorUsedError;
  String? get title => throw _privateConstructorUsedError;
  String? get description => throw _privateConstructorUsedError;
  int get priority => throw _privateConstructorUsedError;
  DateTime? get resolvedAt => throw _privateConstructorUsedError;
  DateTime get createdAt => throw _privateConstructorUsedError;
  DateTime get updatedAt => throw _privateConstructorUsedError;
  List<String> get photoUrls => throw _privateConstructorUsedError;
  List<String> get audioUrls => throw _privateConstructorUsedError;
  IssueCreatorModel? get creator => throw _privateConstructorUsedError;

  /// Serializes this IssueModel to a JSON map.
  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;

  /// Create a copy of IssueModel
  /// with the given fields replaced by the non-null parameter values.
  @JsonKey(includeFromJson: false, includeToJson: false)
  $IssueModelCopyWith<IssueModel> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $IssueModelCopyWith<$Res> {
  factory $IssueModelCopyWith(
          IssueModel value, $Res Function(IssueModel) then) =
      _$IssueModelCopyWithImpl<$Res, IssueModel>;
  @useResult
  $Res call(
      {String id,
      String roomId,
      String createdBy,
      TradeType assignedTrade,
      String? assignedTo,
      @JsonKey(fromJson: IssueStatus.fromString, toJson: _issueStatusToJson)
      IssueStatus status,
      String? title,
      String? description,
      int priority,
      DateTime? resolvedAt,
      DateTime createdAt,
      DateTime updatedAt,
      List<String> photoUrls,
      List<String> audioUrls,
      IssueCreatorModel? creator});

  $IssueCreatorModelCopyWith<$Res>? get creator;
}

/// @nodoc
class _$IssueModelCopyWithImpl<$Res, $Val extends IssueModel>
    implements $IssueModelCopyWith<$Res> {
  _$IssueModelCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  /// Create a copy of IssueModel
  /// with the given fields replaced by the non-null parameter values.
  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? id = null,
    Object? roomId = null,
    Object? createdBy = null,
    Object? assignedTrade = null,
    Object? assignedTo = freezed,
    Object? status = null,
    Object? title = freezed,
    Object? description = freezed,
    Object? priority = null,
    Object? resolvedAt = freezed,
    Object? createdAt = null,
    Object? updatedAt = null,
    Object? photoUrls = null,
    Object? audioUrls = null,
    Object? creator = freezed,
  }) {
    return _then(_value.copyWith(
      id: null == id
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as String,
      roomId: null == roomId
          ? _value.roomId
          : roomId // ignore: cast_nullable_to_non_nullable
              as String,
      createdBy: null == createdBy
          ? _value.createdBy
          : createdBy // ignore: cast_nullable_to_non_nullable
              as String,
      assignedTrade: null == assignedTrade
          ? _value.assignedTrade
          : assignedTrade // ignore: cast_nullable_to_non_nullable
              as TradeType,
      assignedTo: freezed == assignedTo
          ? _value.assignedTo
          : assignedTo // ignore: cast_nullable_to_non_nullable
              as String?,
      status: null == status
          ? _value.status
          : status // ignore: cast_nullable_to_non_nullable
              as IssueStatus,
      title: freezed == title
          ? _value.title
          : title // ignore: cast_nullable_to_non_nullable
              as String?,
      description: freezed == description
          ? _value.description
          : description // ignore: cast_nullable_to_non_nullable
              as String?,
      priority: null == priority
          ? _value.priority
          : priority // ignore: cast_nullable_to_non_nullable
              as int,
      resolvedAt: freezed == resolvedAt
          ? _value.resolvedAt
          : resolvedAt // ignore: cast_nullable_to_non_nullable
              as DateTime?,
      createdAt: null == createdAt
          ? _value.createdAt
          : createdAt // ignore: cast_nullable_to_non_nullable
              as DateTime,
      updatedAt: null == updatedAt
          ? _value.updatedAt
          : updatedAt // ignore: cast_nullable_to_non_nullable
              as DateTime,
      photoUrls: null == photoUrls
          ? _value.photoUrls
          : photoUrls // ignore: cast_nullable_to_non_nullable
              as List<String>,
      audioUrls: null == audioUrls
          ? _value.audioUrls
          : audioUrls // ignore: cast_nullable_to_non_nullable
              as List<String>,
      creator: freezed == creator
          ? _value.creator
          : creator // ignore: cast_nullable_to_non_nullable
              as IssueCreatorModel?,
    ) as $Val);
  }

  /// Create a copy of IssueModel
  /// with the given fields replaced by the non-null parameter values.
  @override
  @pragma('vm:prefer-inline')
  $IssueCreatorModelCopyWith<$Res>? get creator {
    if (_value.creator == null) {
      return null;
    }

    return $IssueCreatorModelCopyWith<$Res>(_value.creator!, (value) {
      return _then(_value.copyWith(creator: value) as $Val);
    });
  }
}

/// @nodoc
abstract class _$$IssueModelImplCopyWith<$Res>
    implements $IssueModelCopyWith<$Res> {
  factory _$$IssueModelImplCopyWith(
          _$IssueModelImpl value, $Res Function(_$IssueModelImpl) then) =
      __$$IssueModelImplCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call(
      {String id,
      String roomId,
      String createdBy,
      TradeType assignedTrade,
      String? assignedTo,
      @JsonKey(fromJson: IssueStatus.fromString, toJson: _issueStatusToJson)
      IssueStatus status,
      String? title,
      String? description,
      int priority,
      DateTime? resolvedAt,
      DateTime createdAt,
      DateTime updatedAt,
      List<String> photoUrls,
      List<String> audioUrls,
      IssueCreatorModel? creator});

  @override
  $IssueCreatorModelCopyWith<$Res>? get creator;
}

/// @nodoc
class __$$IssueModelImplCopyWithImpl<$Res>
    extends _$IssueModelCopyWithImpl<$Res, _$IssueModelImpl>
    implements _$$IssueModelImplCopyWith<$Res> {
  __$$IssueModelImplCopyWithImpl(
      _$IssueModelImpl _value, $Res Function(_$IssueModelImpl) _then)
      : super(_value, _then);

  /// Create a copy of IssueModel
  /// with the given fields replaced by the non-null parameter values.
  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? id = null,
    Object? roomId = null,
    Object? createdBy = null,
    Object? assignedTrade = null,
    Object? assignedTo = freezed,
    Object? status = null,
    Object? title = freezed,
    Object? description = freezed,
    Object? priority = null,
    Object? resolvedAt = freezed,
    Object? createdAt = null,
    Object? updatedAt = null,
    Object? photoUrls = null,
    Object? audioUrls = null,
    Object? creator = freezed,
  }) {
    return _then(_$IssueModelImpl(
      id: null == id
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as String,
      roomId: null == roomId
          ? _value.roomId
          : roomId // ignore: cast_nullable_to_non_nullable
              as String,
      createdBy: null == createdBy
          ? _value.createdBy
          : createdBy // ignore: cast_nullable_to_non_nullable
              as String,
      assignedTrade: null == assignedTrade
          ? _value.assignedTrade
          : assignedTrade // ignore: cast_nullable_to_non_nullable
              as TradeType,
      assignedTo: freezed == assignedTo
          ? _value.assignedTo
          : assignedTo // ignore: cast_nullable_to_non_nullable
              as String?,
      status: null == status
          ? _value.status
          : status // ignore: cast_nullable_to_non_nullable
              as IssueStatus,
      title: freezed == title
          ? _value.title
          : title // ignore: cast_nullable_to_non_nullable
              as String?,
      description: freezed == description
          ? _value.description
          : description // ignore: cast_nullable_to_non_nullable
              as String?,
      priority: null == priority
          ? _value.priority
          : priority // ignore: cast_nullable_to_non_nullable
              as int,
      resolvedAt: freezed == resolvedAt
          ? _value.resolvedAt
          : resolvedAt // ignore: cast_nullable_to_non_nullable
              as DateTime?,
      createdAt: null == createdAt
          ? _value.createdAt
          : createdAt // ignore: cast_nullable_to_non_nullable
              as DateTime,
      updatedAt: null == updatedAt
          ? _value.updatedAt
          : updatedAt // ignore: cast_nullable_to_non_nullable
              as DateTime,
      photoUrls: null == photoUrls
          ? _value._photoUrls
          : photoUrls // ignore: cast_nullable_to_non_nullable
              as List<String>,
      audioUrls: null == audioUrls
          ? _value._audioUrls
          : audioUrls // ignore: cast_nullable_to_non_nullable
              as List<String>,
      creator: freezed == creator
          ? _value.creator
          : creator // ignore: cast_nullable_to_non_nullable
              as IssueCreatorModel?,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$IssueModelImpl implements _IssueModel {
  const _$IssueModelImpl(
      {required this.id,
      required this.roomId,
      required this.createdBy,
      this.assignedTrade = TradeType.unknown,
      this.assignedTo,
      @JsonKey(fromJson: IssueStatus.fromString, toJson: _issueStatusToJson)
      this.status = IssueStatus.open,
      this.title,
      this.description,
      this.priority = 2,
      this.resolvedAt,
      required this.createdAt,
      required this.updatedAt,
      final List<String> photoUrls = const [],
      final List<String> audioUrls = const [],
      this.creator})
      : _photoUrls = photoUrls,
        _audioUrls = audioUrls;

  factory _$IssueModelImpl.fromJson(Map<String, dynamic> json) =>
      _$$IssueModelImplFromJson(json);

  @override
  final String id;
  @override
  final String roomId;
  @override
  final String createdBy;
  @override
  @JsonKey()
  final TradeType assignedTrade;
  @override
  final String? assignedTo;
  @override
  @JsonKey(fromJson: IssueStatus.fromString, toJson: _issueStatusToJson)
  final IssueStatus status;
  @override
  final String? title;
  @override
  final String? description;
  @override
  @JsonKey()
  final int priority;
  @override
  final DateTime? resolvedAt;
  @override
  final DateTime createdAt;
  @override
  final DateTime updatedAt;
  final List<String> _photoUrls;
  @override
  @JsonKey()
  List<String> get photoUrls {
    if (_photoUrls is EqualUnmodifiableListView) return _photoUrls;
    // ignore: implicit_dynamic_type
    return EqualUnmodifiableListView(_photoUrls);
  }

  final List<String> _audioUrls;
  @override
  @JsonKey()
  List<String> get audioUrls {
    if (_audioUrls is EqualUnmodifiableListView) return _audioUrls;
    // ignore: implicit_dynamic_type
    return EqualUnmodifiableListView(_audioUrls);
  }

  @override
  final IssueCreatorModel? creator;

  @override
  String toString() {
    return 'IssueModel(id: $id, roomId: $roomId, createdBy: $createdBy, assignedTrade: $assignedTrade, assignedTo: $assignedTo, status: $status, title: $title, description: $description, priority: $priority, resolvedAt: $resolvedAt, createdAt: $createdAt, updatedAt: $updatedAt, photoUrls: $photoUrls, audioUrls: $audioUrls, creator: $creator)';
  }

  @override
  bool operator ==(Object other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$IssueModelImpl &&
            (identical(other.id, id) || other.id == id) &&
            (identical(other.roomId, roomId) || other.roomId == roomId) &&
            (identical(other.createdBy, createdBy) ||
                other.createdBy == createdBy) &&
            (identical(other.assignedTrade, assignedTrade) ||
                other.assignedTrade == assignedTrade) &&
            (identical(other.assignedTo, assignedTo) ||
                other.assignedTo == assignedTo) &&
            (identical(other.status, status) || other.status == status) &&
            (identical(other.title, title) || other.title == title) &&
            (identical(other.description, description) ||
                other.description == description) &&
            (identical(other.priority, priority) ||
                other.priority == priority) &&
            (identical(other.resolvedAt, resolvedAt) ||
                other.resolvedAt == resolvedAt) &&
            (identical(other.createdAt, createdAt) ||
                other.createdAt == createdAt) &&
            (identical(other.updatedAt, updatedAt) ||
                other.updatedAt == updatedAt) &&
            const DeepCollectionEquality()
                .equals(other._photoUrls, _photoUrls) &&
            const DeepCollectionEquality()
                .equals(other._audioUrls, _audioUrls) &&
            (identical(other.creator, creator) || other.creator == creator));
  }

  @JsonKey(includeFromJson: false, includeToJson: false)
  @override
  int get hashCode => Object.hash(
      runtimeType,
      id,
      roomId,
      createdBy,
      assignedTrade,
      assignedTo,
      status,
      title,
      description,
      priority,
      resolvedAt,
      createdAt,
      updatedAt,
      const DeepCollectionEquality().hash(_photoUrls),
      const DeepCollectionEquality().hash(_audioUrls),
      creator);

  /// Create a copy of IssueModel
  /// with the given fields replaced by the non-null parameter values.
  @JsonKey(includeFromJson: false, includeToJson: false)
  @override
  @pragma('vm:prefer-inline')
  _$$IssueModelImplCopyWith<_$IssueModelImpl> get copyWith =>
      __$$IssueModelImplCopyWithImpl<_$IssueModelImpl>(this, _$identity);

  @override
  Map<String, dynamic> toJson() {
    return _$$IssueModelImplToJson(
      this,
    );
  }
}

abstract class _IssueModel implements IssueModel {
  const factory _IssueModel(
      {required final String id,
      required final String roomId,
      required final String createdBy,
      final TradeType assignedTrade,
      final String? assignedTo,
      @JsonKey(fromJson: IssueStatus.fromString, toJson: _issueStatusToJson)
      final IssueStatus status,
      final String? title,
      final String? description,
      final int priority,
      final DateTime? resolvedAt,
      required final DateTime createdAt,
      required final DateTime updatedAt,
      final List<String> photoUrls,
      final List<String> audioUrls,
      final IssueCreatorModel? creator}) = _$IssueModelImpl;

  factory _IssueModel.fromJson(Map<String, dynamic> json) =
      _$IssueModelImpl.fromJson;

  @override
  String get id;
  @override
  String get roomId;
  @override
  String get createdBy;
  @override
  TradeType get assignedTrade;
  @override
  String? get assignedTo;
  @override
  @JsonKey(fromJson: IssueStatus.fromString, toJson: _issueStatusToJson)
  IssueStatus get status;
  @override
  String? get title;
  @override
  String? get description;
  @override
  int get priority;
  @override
  DateTime? get resolvedAt;
  @override
  DateTime get createdAt;
  @override
  DateTime get updatedAt;
  @override
  List<String> get photoUrls;
  @override
  List<String> get audioUrls;
  @override
  IssueCreatorModel? get creator;

  /// Create a copy of IssueModel
  /// with the given fields replaced by the non-null parameter values.
  @override
  @JsonKey(includeFromJson: false, includeToJson: false)
  _$$IssueModelImplCopyWith<_$IssueModelImpl> get copyWith =>
      throw _privateConstructorUsedError;
}

IssueCreatorModel _$IssueCreatorModelFromJson(Map<String, dynamic> json) {
  return _IssueCreatorModel.fromJson(json);
}

/// @nodoc
mixin _$IssueCreatorModel {
  String get id => throw _privateConstructorUsedError;
  String get fullName => throw _privateConstructorUsedError;
  String get email => throw _privateConstructorUsedError;

  /// Serializes this IssueCreatorModel to a JSON map.
  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;

  /// Create a copy of IssueCreatorModel
  /// with the given fields replaced by the non-null parameter values.
  @JsonKey(includeFromJson: false, includeToJson: false)
  $IssueCreatorModelCopyWith<IssueCreatorModel> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $IssueCreatorModelCopyWith<$Res> {
  factory $IssueCreatorModelCopyWith(
          IssueCreatorModel value, $Res Function(IssueCreatorModel) then) =
      _$IssueCreatorModelCopyWithImpl<$Res, IssueCreatorModel>;
  @useResult
  $Res call({String id, String fullName, String email});
}

/// @nodoc
class _$IssueCreatorModelCopyWithImpl<$Res, $Val extends IssueCreatorModel>
    implements $IssueCreatorModelCopyWith<$Res> {
  _$IssueCreatorModelCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  /// Create a copy of IssueCreatorModel
  /// with the given fields replaced by the non-null parameter values.
  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? id = null,
    Object? fullName = null,
    Object? email = null,
  }) {
    return _then(_value.copyWith(
      id: null == id
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as String,
      fullName: null == fullName
          ? _value.fullName
          : fullName // ignore: cast_nullable_to_non_nullable
              as String,
      email: null == email
          ? _value.email
          : email // ignore: cast_nullable_to_non_nullable
              as String,
    ) as $Val);
  }
}

/// @nodoc
abstract class _$$IssueCreatorModelImplCopyWith<$Res>
    implements $IssueCreatorModelCopyWith<$Res> {
  factory _$$IssueCreatorModelImplCopyWith(_$IssueCreatorModelImpl value,
          $Res Function(_$IssueCreatorModelImpl) then) =
      __$$IssueCreatorModelImplCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call({String id, String fullName, String email});
}

/// @nodoc
class __$$IssueCreatorModelImplCopyWithImpl<$Res>
    extends _$IssueCreatorModelCopyWithImpl<$Res, _$IssueCreatorModelImpl>
    implements _$$IssueCreatorModelImplCopyWith<$Res> {
  __$$IssueCreatorModelImplCopyWithImpl(_$IssueCreatorModelImpl _value,
      $Res Function(_$IssueCreatorModelImpl) _then)
      : super(_value, _then);

  /// Create a copy of IssueCreatorModel
  /// with the given fields replaced by the non-null parameter values.
  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? id = null,
    Object? fullName = null,
    Object? email = null,
  }) {
    return _then(_$IssueCreatorModelImpl(
      id: null == id
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as String,
      fullName: null == fullName
          ? _value.fullName
          : fullName // ignore: cast_nullable_to_non_nullable
              as String,
      email: null == email
          ? _value.email
          : email // ignore: cast_nullable_to_non_nullable
              as String,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$IssueCreatorModelImpl implements _IssueCreatorModel {
  const _$IssueCreatorModelImpl(
      {required this.id, required this.fullName, required this.email});

  factory _$IssueCreatorModelImpl.fromJson(Map<String, dynamic> json) =>
      _$$IssueCreatorModelImplFromJson(json);

  @override
  final String id;
  @override
  final String fullName;
  @override
  final String email;

  @override
  String toString() {
    return 'IssueCreatorModel(id: $id, fullName: $fullName, email: $email)';
  }

  @override
  bool operator ==(Object other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$IssueCreatorModelImpl &&
            (identical(other.id, id) || other.id == id) &&
            (identical(other.fullName, fullName) ||
                other.fullName == fullName) &&
            (identical(other.email, email) || other.email == email));
  }

  @JsonKey(includeFromJson: false, includeToJson: false)
  @override
  int get hashCode => Object.hash(runtimeType, id, fullName, email);

  /// Create a copy of IssueCreatorModel
  /// with the given fields replaced by the non-null parameter values.
  @JsonKey(includeFromJson: false, includeToJson: false)
  @override
  @pragma('vm:prefer-inline')
  _$$IssueCreatorModelImplCopyWith<_$IssueCreatorModelImpl> get copyWith =>
      __$$IssueCreatorModelImplCopyWithImpl<_$IssueCreatorModelImpl>(
          this, _$identity);

  @override
  Map<String, dynamic> toJson() {
    return _$$IssueCreatorModelImplToJson(
      this,
    );
  }
}

abstract class _IssueCreatorModel implements IssueCreatorModel {
  const factory _IssueCreatorModel(
      {required final String id,
      required final String fullName,
      required final String email}) = _$IssueCreatorModelImpl;

  factory _IssueCreatorModel.fromJson(Map<String, dynamic> json) =
      _$IssueCreatorModelImpl.fromJson;

  @override
  String get id;
  @override
  String get fullName;
  @override
  String get email;

  /// Create a copy of IssueCreatorModel
  /// with the given fields replaced by the non-null parameter values.
  @override
  @JsonKey(includeFromJson: false, includeToJson: false)
  _$$IssueCreatorModelImplCopyWith<_$IssueCreatorModelImpl> get copyWith =>
      throw _privateConstructorUsedError;
}
