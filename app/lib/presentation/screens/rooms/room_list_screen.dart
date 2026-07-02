// ignore_for_file: unused_import
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/constants/app_constants.dart';
import '../../../data/repositories/room_repository.dart' show RoomRepository;
import '../../providers/apartment_provider.dart';
import '../../providers/room_provider.dart';

class RoomListScreen extends ConsumerWidget {
  final String projectId;
  final String floorId;
  final String apartmentId;
  final String? initialApartmentIdentifier;

  const RoomListScreen({
    super.key,
    required this.projectId,
    required this.floorId,
    required this.apartmentId,
    this.initialApartmentIdentifier,
  });

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final roomsAsync = ref.watch(roomsProvider(apartmentId));
    final apartmentsAsync = ref.watch(apartmentsProvider(floorId));
    final apartmentIdentifier = initialApartmentIdentifier ??
        apartmentsAsync.maybeWhen(
          data: (apartments) {
            for (final a in apartments) {
              if (a.id == apartmentId) return a.identifier;
            }
            return null;
          },
          orElse: () => null,
        );

    return Scaffold(
      appBar: AppBar(
        title: Text(apartmentIdentifier ?? 'Apartment'),
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
          return ListView(
            padding: const EdgeInsets.all(16),
            children: [
              Padding(
                padding: const EdgeInsets.only(bottom: 8),
                child: Text(
                  'Rooms',
                  style: Theme.of(context).textTheme.titleMedium?.copyWith(
                        fontWeight: FontWeight.bold,
                      ),
                ),
              ),
              if (rooms.isEmpty)
                const Padding(
                  padding: EdgeInsets.symmetric(vertical: 24),
                  child: Center(
                    child: Text('No rooms yet.\nTap + to add one.', textAlign: TextAlign.center),
                  ),
                )
              else
                ...rooms.map(
                  (r) => Card(
                    margin: const EdgeInsets.only(bottom: 12),
                    child: ListTile(
                      leading: const Icon(Icons.meeting_room),
                      title: Text(r.name, style: const TextStyle(fontWeight: FontWeight.bold)),
                      trailing: const Icon(Icons.chevron_right),
                      onTap: () => context.push(
                        '/projects/$projectId/floors/$floorId/apartments/$apartmentId/rooms/${r.id}',
                        extra: r,
                      ),
                    ),
                  ),
                ),
            ],
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
