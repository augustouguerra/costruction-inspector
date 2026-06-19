import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../providers/issue_provider.dart';
import '../../widgets/issue_card.dart';
import '../recording/recording_sheet.dart';

class RoomDetailScreen extends ConsumerWidget {
  final String projectId;
  final String floorId;
  final String apartmentId;
  final String roomId;

  const RoomDetailScreen({
    super.key,
    required this.projectId,
    required this.floorId,
    required this.apartmentId,
    required this.roomId,
  });

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final issuesAsync = ref.watch(roomIssuesProvider(roomId));

    return Scaffold(
      appBar: AppBar(title: const Text('Room Issues')),
      body: issuesAsync.when(
        loading: () => const Center(child: CircularProgressIndicator()),
        error: (e, _) => Center(child: Text('Error: $e')),
        data: (issues) {
          if (issues.isEmpty) {
            return const Center(
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
            );
          }
          return ListView.builder(
            padding: const EdgeInsets.all(16),
            itemCount: issues.length,
            itemBuilder: (_, i) => IssueCard(issue: issues[i]),
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
