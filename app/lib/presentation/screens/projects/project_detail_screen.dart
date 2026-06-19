// ignore_for_file: unused_import
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../data/repositories/floor_repository.dart' show FloorRepository;
import '../../providers/floor_provider.dart';

class ProjectDetailScreen extends ConsumerWidget {
  final String projectId;
  const ProjectDetailScreen({super.key, required this.projectId});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final floorsAsync = ref.watch(floorsProvider(projectId));

    return Scaffold(
      appBar: AppBar(
        title: const Text('Floors'),
        actions: [
          IconButton(
            icon: const Icon(Icons.add),
            onPressed: () => _showAddFloor(context, ref),
          ),
        ],
      ),
      body: floorsAsync.when(
        loading: () => const Center(child: CircularProgressIndicator()),
        error: (e, _) => Center(child: Text('Error: $e')),
        data: (floors) {
          if (floors.isEmpty) {
            return const Center(
              child: Text('No floors yet.\nTap + to add one.', textAlign: TextAlign.center),
            );
          }
          return ListView.builder(
            padding: const EdgeInsets.all(16),
            itemCount: floors.length,
            itemBuilder: (_, i) {
              final f = floors[i];
              return Card(
                margin: const EdgeInsets.only(bottom: 12),
                child: ListTile(
                  leading: CircleAvatar(child: Text('${f.number}')),
                  title: Text(f.label, style: const TextStyle(fontWeight: FontWeight.bold)),
                  trailing: const Icon(Icons.chevron_right),
                  onTap: () => context.push(
                    '/projects/$projectId/floors/${f.id}/apartments',
                  ),
                ),
              );
            },
          );
        },
      ),
    );
  }

  void _showAddFloor(BuildContext context, WidgetRef ref) {
    final numberCtrl = TextEditingController();
    final labelCtrl = TextEditingController();
    showDialog(
      context: context,
      builder: (ctx) => AlertDialog(
        title: const Text('Add Floor'),
        content: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            TextField(
              controller: numberCtrl,
              decoration: const InputDecoration(
                labelText: 'Floor Number (e.g. 1)',
                border: OutlineInputBorder(),
              ),
              keyboardType: TextInputType.number,
            ),
            const SizedBox(height: 12),
            TextField(
              controller: labelCtrl,
              decoration: const InputDecoration(
                labelText: 'Label (e.g. First Floor)',
                border: OutlineInputBorder(),
              ),
            ),
          ],
        ),
        actions: [
          TextButton(onPressed: () => Navigator.pop(ctx), child: const Text('Cancel')),
          FilledButton(
            onPressed: () async {
              final num = int.tryParse(numberCtrl.text.trim());
              if (num == null) return;
              final label = labelCtrl.text.trim().isEmpty
                  ? 'Floor $num'
                  : labelCtrl.text.trim();
              await ref.read(floorRepositoryProvider).createFloor(
                    projectId: projectId,
                    number: num,
                    label: label,
                  );
              ref.invalidate(floorsProvider(projectId));
              if (ctx.mounted) Navigator.pop(ctx);
            },
            child: const Text('Add'),
          ),
        ],
      ),
    );
  }
}
