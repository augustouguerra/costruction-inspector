import 'package:freezed_annotation/freezed_annotation.dart';

import '../../domain/enums/trade_type.dart';
import '../../domain/enums/user_role.dart';

part 'user_profile_model.freezed.dart';
part 'user_profile_model.g.dart';

@freezed
class UserProfileModel with _$UserProfileModel {
  const factory UserProfileModel({
    required String id,
    required String fullName,
    @Default(UserRole.tradesperson) UserRole role,
    TradeType? trade,
    String? avatarUrl,
    String? phone,
    required DateTime createdAt,
    required DateTime updatedAt,
  }) = _UserProfileModel;

  factory UserProfileModel.fromJson(Map<String, dynamic> json) =>
      _$UserProfileModelFromJson(json);
}
