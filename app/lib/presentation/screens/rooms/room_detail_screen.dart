import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

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
      appBar: AppBar(title: Text(roomName ?? 'Room')),
      body: issuesAsync.when(
        loading: () => const Center(child: CircularProgressIndicator()),
        error: (e, _) => Center(child: Text('Error: $e')),
        data: (issues) {
          return ListView(
            padding: const EdgeInsets.all(16),
            children: [
              Padding(
                padding: const EdgeInsets.only(bottom: 8),
                child: Text(
                  'Issues',
                  style: Theme.of(context).textTheme.titleMedium?.copyWith(
                        fontWeight: FontWeight.bold,
                      ),
                ),
              ),
              if (issues.isEmpty)
                const Padding(
                  padding: EdgeInsets.symmetric(vertical: 24),
                  child: Center(
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Icon(Icons.check_circle_outline, size: 64, color: Colors.green),
                        SizedBox(height: 16),
                        Text('No issues found.', style: TextStyle(fontSize: 18)),
                        SizedBox(height: 8),
                        Text('Tap the mic to record a new issue.', style: TextStyle(color: Colors.grey)),
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
