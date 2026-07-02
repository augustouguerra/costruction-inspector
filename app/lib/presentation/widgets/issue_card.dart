import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

import '../../data/models/issue_model.dart';
import '../../domain/enums/issue_status.dart';
import 'trade_badge.dart';

class IssueCard extends StatelessWidget {
  final IssueModel issue;

  const IssueCard({super.key, required this.issue});

  Color _statusColor(IssueStatus status) => switch (status) {
        IssueStatus.open => Colors.orange,
        IssueStatus.acknowledged => Colors.blue,
        IssueStatus.inProgress => Colors.purple,
        IssueStatus.resolved => Colors.green,
        IssueStatus.rejected => Colors.red,
      };

  @override
  Widget build(BuildContext context) {
    return Card(
      margin: const EdgeInsets.only(bottom: 12),
      child: InkWell(
        borderRadius: BorderRadius.circular(12),
        onTap: () => context.push('/issues/${issue.id}'),
        child: Padding(
          padding: const EdgeInsets.all(16),
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
                      color: _statusColor(issue.status).withAlpha(26),
                      borderRadius: BorderRadius.circular(12),
                    ),
                    child: Text(
                      issue.status.label,
                      style: TextStyle(
                        color: _statusColor(issue.status),
                        fontSize: 11,
                        fontWeight: FontWeight.w600,
                      ),
                    ),
                  ),
                ],
              ),
              if (issue.title != null) ...[
                const SizedBox(height: 8),
                Text(
                  issue.title!,
                  style: const TextStyle(fontWeight: FontWeight.w600),
                  maxLines: 2,
                  overflow: TextOverflow.ellipsis,
                ),
              ],
              if (issue.description != null) ...[
                const SizedBox(height: 4),
                Text(
                  issue.description!,
                  style: Theme.of(context).textTheme.bodySmall,
                  maxLines: 2,
                  overflow: TextOverflow.ellipsis,
                ),
              ],
              const SizedBox(height: 8),
              Row(
                children: [
                  if (issue.audioUrls.isNotEmpty)
                    const Icon(Icons.mic, size: 14, color: Colors.grey),
                  if (issue.photoUrls.isNotEmpty) ...[
                    const SizedBox(width: 4),
                    const Icon(Icons.photo, size: 14, color: Colors.grey),
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
    );
  }

  String _formatDate(DateTime dt) {
    return '${dt.day}/${dt.month}/${dt.year}';
  }
}
