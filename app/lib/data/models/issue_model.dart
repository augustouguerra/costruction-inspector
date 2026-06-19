import 'package:freezed_annotation/freezed_annotation.dart';

import '../../domain/enums/issue_status.dart';
import '../../domain/enums/trade_type.dart';

part 'issue_model.freezed.dart';
part 'issue_model.g.dart';

@freezed
class IssueModel with _$IssueModel {
  const factory IssueModel({
    required String id,
    required String roomId,
    required String createdBy,
    @Default(TradeType.unknown) TradeType assignedTrade,
    String? assignedTo,
    @Default(IssueStatus.open) IssueStatus status,
    String? title,
    String? description,
    String? audioFileUrl,
    String? transcriptionRaw,
    double? detectionConfidence,
    @Default(2) int priority,
    DateTime? resolvedAt,
    required DateTime createdAt,
    required DateTime updatedAt,
    @Default([]) List<String> photoUrls,
  }) = _IssueModel;

  factory IssueModel.fromJson(Map<String, dynamic> json) =>
      _$IssueModelFromJson(json);
}
