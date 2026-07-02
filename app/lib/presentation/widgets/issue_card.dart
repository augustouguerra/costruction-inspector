import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

import '../../core/theme/app_colors.dart';
import '../../data/models/issue_model.dart';
import '../../domain/enums/issue_status.dart';
import 'trade_badge.dart';

class IssueCard extends StatelessWidget {
  final IssueModel issue;

  const IssueCard({super.key, required this.issue});

  Color _statusColor(IssueStatus status) => switch (status) {
        IssueStatus.open => AppColors.warning,
        IssueStatus.acknowledged => AppColors.primaryLight,
        IssueStatus.inProgress => const Color(0xFF8E44AD),
        IssueStatus.resolved => AppColors.success,
        IssueStatus.rejected => AppColors.error,
      };

  @override
  Widget build(BuildContext context) {
    final statusColor = _statusColor(issue.status);
    return Card(
      margin: const EdgeInsets.only(bottom: 12),
      elevation: 1,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(14),
        side: BorderSide(color: Colors.grey.withAlpha(30)),
      ),
      clipBehavior: Clip.antiAlias,
      child: InkWell(
        onTap: () => context.push('/issues/${issue.id}'),
        child: IntrinsicHeight(
          child: Row(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Container(width: 4, color: statusColor),
              Expanded(
                child: Padding(
                  padding: const EdgeInsets.fromLTRB(14, 14, 14, 12),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Row(
                        children: [
                          TradeBadge(trade: issue.assignedTrade, small: true),
                          const Spacer(),
                          Container(
                            padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                            decoration: BoxDecoration(
                              color: statusColor.withAlpha(26),
                              borderRadius: BorderRadius.circular(12),
                            ),
                            child: Text(
                              issue.status.label,
                              style: TextStyle(
                                color: statusColor,
                                fontSize: 11,
                                fontWeight: FontWeight.w600,
                              ),
                            ),
                          ),
                        ],
                      ),
                      if (issue.title != null) ...[
                        const SizedBox(height: 10),
                        Text(
                          issue.title!,
                          style: const TextStyle(
                            fontWeight: FontWeight.w700,
                            fontSize: 15,
                            color: AppColors.onSurface,
                          ),
                          maxLines: 2,
                          overflow: TextOverflow.ellipsis,
                        ),
                      ],
                      if (issue.description != null) ...[
                        const SizedBox(height: 4),
                        Text(
                          issue.description!,
                          style: Theme.of(context).textTheme.bodySmall?.copyWith(
                                color: Colors.grey[600],
                              ),
                          maxLines: 2,
                          overflow: TextOverflow.ellipsis,
                        ),
                      ],
                      if (issue.creator != null) ...[
                        const SizedBox(height: 10),
                        Row(
                          children: [
                            const Icon(Icons.person_outline, size: 13, color: Colors.grey),
                            const SizedBox(width: 4),
                            Text(
                              issue.creator!.fullName,
                              style: const TextStyle(fontSize: 12, color: Colors.grey),
                            ),
                          ],
                        ),
                      ],
                      const SizedBox(height: 10),
                      Divider(height: 1, color: Colors.grey.withAlpha(40)),
                      const SizedBox(height: 8),
                      Row(
                        children: [
                          if (issue.audioUrls.isNotEmpty)
                            const Icon(Icons.mic, size: 15, color: Colors.grey),
                          if (issue.photoUrls.isNotEmpty) ...[
                            const SizedBox(width: 6),
                            const Icon(Icons.photo, size: 15, color: Colors.grey),
                            Text(
                              ' ${issue.photoUrls.length}',
                              style: const TextStyle(fontSize: 12, color: Colors.grey),
                            ),
                          ],
                          const Spacer(),
                          Text(
                            _formatDate(issue.createdAt),
                            style: const TextStyle(fontSize: 11, color: Colors.grey),
                          ),
                        ],
                      ),
                    ],
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  String _formatDate(DateTime dt) {
    final local = dt.toLocal();
    final hh = local.hour.toString().padLeft(2, '0');
    final mm = local.minute.toString().padLeft(2, '0');
    return '${local.day}/${local.month}/${local.year} $hh:$mm';
  }
}
