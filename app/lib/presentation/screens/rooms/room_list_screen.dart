// ignore_for_file: unused_import
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/constants/app_constants.dart';
import '../../../data/repositories/room_repository.dart' show RoomRepository;
import '../../providers/room_provider.dart';

class RoomListScreen extends ConsumerWidget {
  final String projectId;
  final String floorId;
  final String apartmentId;

  const RoomListScreen({
    super.key,
    required this.projectId,
    required this.floorId,
    required this.apartmentId,
  });

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final roomsAsync = ref.watch(roomsProvider(apartmentId));

    return Scaffold(
      appBar: AppBar(
        title: const Text('Rooms'),
        actions: [
          IconButton(
            icon: const Icon(Icons.add),
            onPressed: () => _showAddRoom(context, ref),
          ),
        ],
      ),
      body: roomsAsync.when(
        loading: () => const Center(child: CircularProgressIndicator()),
        error: (e, _) => Center(child: Text('Error: $e')),
        data: (rooms) {
          if (rooms.isEmpty) {
            return const Center(
              child: Text('No rooms yet.\nTap + to add one.', textAlign: TextAlign.center),
            );
          }
          return ListView.builder(
            padding: const EdgeInsets.all(16),
            itemCount: rooms.length,
            itemBuilder: (_, i) {
              final r = rooms[i];
              return Card(
                margin: const EdgeInsets.only(bottom: 12),
                child: ListTile(
                  leading: const Icon(Icons.meeting_room),
                  title: Text(r.name, style: const TextStyle(fontWeight: FontWeight.bold)),
                  trailing: const Icon(Icons.chevron_right),
                  onTap: () => context.push(
                    '/projects/$projectId/floors/$floorId/apartments/$apartmentId/rooms/${r.id}',
                  ),
                ),
              );
            },
          );
        },
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () => _showAddRoom(context, ref),
        child: const Icon(Icons.add),
      ),
    );
  }

  void _showAddRoom(BuildContext context, WidgetRef ref) {
    final ctrl = TextEditingController();
    showDialog(
      context: context,
      builder: (ctx) => AlertDialog(
        title: const Text('Add Room'),
        content: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Wrap(
              spacing: 8,
              runSpacing: 8,
              children: AppConstants.predefinedRooms
                  .map(
                    (room) => ActionChip(
                      label: Text(room),
                      onPressed: () {
                        ctrl.text = room;
                      },
                    ),
                  )
                  .toList(),
            ),
            const SizedBox(height: 12),
            TextField(
              controller: ctrl,
              decoration: const InputDecoration(
                labelText: 'Room Name',
                border: OutlineInputBorder(),
              ),
            ),
          ],
        ),
        actions: [
          TextButton(onPressed: () => Navigator.pop(ctx), child: const Text('Cancel')),
          FilledButton(
            onPressed: () async {
              if (ctrl.text.trim().isEmpty) return;
              await ref.read(roomRepositoryProvider).createRoom(
                    apartmentId: apartmentId,
                    name: ctrl.text.trim(),
                  );
              ref.invalidate(roomsProvider(apartmentId));
              if (ctx.mounted) Navigator.pop(ctx);
            },
            child: const Text('Add'),
          ),
        ],
      ),
    );
  }
}
