// ignore_for_file: unused_import
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../data/repositories/apartment_repository.dart';
import '../../providers/apartment_provider.dart';

class ApartmentListScreen extends ConsumerWidget {
  final String projectId;
  final String floorId;

  const ApartmentListScreen({
    super.key,
    required this.projectId,
    required this.floorId,
  });

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final apartmentsAsync = ref.watch(apartmentsProvider(floorId));

    return Scaffold(
      appBar: AppBar(
        title: const Text('Apartments'),
        actions: [
          IconButton(
            icon: const Icon(Icons.add),
            onPressed: () => _showAddApartment(context, ref),
          ),
        ],
      ),
      body: apartmentsAsync.when(
        loading: () => const Center(child: CircularProgressIndicator()),
        error: (e, _) => Center(child: Text('Error: $e')),
        data: (apartments) {
          if (apartments.isEmpty) {
            return const Center(
              child: Text('No apartments yet.\nTap + to add one.', textAlign: TextAlign.center),
            );
          }
          return GridView.builder(
            padding: const EdgeInsets.all(16),
            gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
              crossAxisCount: 3,
              crossAxisSpacing: 12,
              mainAxisSpacing: 12,
              childAspectRatio: 1,
            ),
            itemCount: apartments.length,
            itemBuilder: (_, i) {
              final a = apartments[i];
              return InkWell(
                onTap: () => context.push(
                  '/projects/$projectId/floors/$floorId/apartments/${a.id}/rooms',
                ),
                borderRadius: BorderRadius.circular(12),
                child: Card(
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      const Icon(Icons.apartment, size: 32),
                      const SizedBox(height: 8),
                      Text(
                        a.identifier,
                        style: const TextStyle(fontWeight: FontWeight.bold),
                        textAlign: TextAlign.center,
                      ),
                    ],
                  ),
                ),
              );
            },
          );
        },
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () => _showAddApartment(context, ref),
        child: const Icon(Icons.add),
      ),
    );
  }

  void _showAddApartment(BuildContext context, WidgetRef ref) {
    final ctrl = TextEditingController();
    showDialog(
      context: context,
      builder: (ctx) => AlertDialog(
        title: const Text('Add Apartment'),
        content: TextField(
          controller: ctrl,
          decoration: const InputDecoration(
            labelText: 'Identifier (e.g. 1A, 101)',
            border: OutlineInputBorder(),
          ),
          autofocus: true,
        ),
        actions: [
          TextButton(onPressed: () => Navigator.pop(ctx), child: const Text('Cancel')),
          FilledButton(
            onPressed: () async {
              if (ctrl.text.trim().isEmpty) return;
              await ref.read(apartmentRepositoryProvider).createApartment(
                    floorId: floorId,
                    identifier: ctrl.text.trim(),
                  );
              ref.invalidate(apartmentsProvider(floorId));
              if (ctx.mounted) Navigator.pop(ctx);
            },
            child: const Text('Add'),
          ),
        ],
      ),
    );
  }
}
