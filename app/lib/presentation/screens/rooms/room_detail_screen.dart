import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../core/theme/app_colors.dart';
import '../../providers/issue_provider.dart';
import '../../providers/room_provider.dart';
import '../../widgets/issue_card.dart';
import '../recording/recording_sheet.dart';

class RoomDetailScreen extends ConsumerWidget {
  final String projectId;
  final String floorId;
  final String apartmentId;
  final String roomId;
  final String? initialRoomName;

  const RoomDetailScreen({
    super.key,
    required this.projectId,
    required this.floorId,
    required this.apartmentId,
    required this.roomId,
    this.initialRoomName,
  });

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final issuesAsync = ref.watch(roomIssuesProvider(roomId));
    final roomsAsync = ref.watch(roomsProvider(apartmentId));
    final roomName = initialRoomName ??
        roomsAsync.maybeWhen(
          data: (rooms) {
            for (final r in rooms) {
              if (r.id == roomId) return r.name;
            }
            return null;
          },
          orElse: () => null,
        );

    return Scaffold(
      backgroundColor: AppColors.surface,
      appBar: AppBar(title: Text(roomName ?? 'Room')),
      body: issuesAsync.when(
        loading: () => const Center(child: CircularProgressIndicator()),
        error: (e, _) => Center(
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              const Icon(Icons.error_outline, size: 48, color: AppColors.error),
              const SizedBox(height: 12),
              Text('Error: $e', textAlign: TextAlign.center),
            ],
          ),
        ),
        data: (issues) {
          return ListView(
            padding: const EdgeInsets.fromLTRB(16, 16, 16, 96),
            children: [
              Padding(
                padding: const EdgeInsets.only(bottom: 12),
                child: Row(
                  children: [
                    Text(
                      'Issues',
                      style: Theme.of(context).textTheme.titleMedium?.copyWith(
                            fontWeight: FontWeight.bold,
                            color: AppColors.onSurface,
                          ),
                    ),
                    if (issues.isNotEmpty) ...[
                      const SizedBox(width: 8),
                      Container(
                        padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 2),
                        decoration: BoxDecoration(
                          color: AppColors.primary.withAlpha(26),
                          borderRadius: BorderRadius.circular(10),
                        ),
                        child: Text(
                          '${issues.length}',
                          style: const TextStyle(
                            color: AppColors.primary,
                            fontSize: 12,
                            fontWeight: FontWeight.w600,
                          ),
                        ),
                      ),
                    ],
                  ],
                ),
              ),
              if (issues.isEmpty)
                Padding(
                  padding: const EdgeInsets.symmetric(vertical: 48),
                  child: Center(
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Container(
                          padding: const EdgeInsets.all(20),
                          decoration: BoxDecoration(
                            color: AppColors.success.withAlpha(26),
                            shape: BoxShape.circle,
                          ),
                          child: const Icon(
                            Icons.check_circle_outline,
                            size: 56,
                            color: AppColors.success,
                          ),
                        ),
                        const SizedBox(height: 20),
                        const Text(
                          'No issues found',
                          style: TextStyle(fontSize: 18, fontWeight: FontWeight.w600),
                        ),
                        const SizedBox(height: 6),
                        const Text(
                          'Tap the mic to record a new issue.',
                          style: TextStyle(color: Colors.grey),
                        ),
                      ],
                    ),
                  ),
                )
              else
                ...issues.map((issue) => IssueCard(issue: issue)),
            ],
          );
        },
      ),
      floatingActionButton: FloatingActionButton.extended(
        onPressed: () => _openRecordingSheet(context, ref),
        icon: const Icon(Icons.mic),
        label: const Text('Record Issue'),
      ),
    );
  }

  void _openRecordingSheet(BuildContext context, WidgetRef ref) {
    showModalBottomSheet(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: (_) => RecordingSheet(roomId: roomId),
    ).then((_) => ref.invalidate(roomIssuesProvider(roomId)));
  }
}
