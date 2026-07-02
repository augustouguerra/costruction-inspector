// ignore_for_file: unused_import
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../data/repositories/apartment_repository.dart';
import '../../providers/apartment_provider.dart';
import '../../providers/floor_provider.dart';

class ApartmentListScreen extends ConsumerWidget {
  final String projectId;
  final String floorId;
  final String? initialFloorLabel;

  const ApartmentListScreen({
    super.key,
    required this.projectId,
    required this.floorId,
    this.initialFloorLabel,
  });

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final apartmentsAsync = ref.watch(apartmentsProvider(floorId));
    final floorsAsync = ref.watch(floorsProvider(projectId));
    final floorLabel = initialFloorLabel ??
        floorsAsync.maybeWhen(
          data: (floors) {
            for (final f in floors) {
              if (f.id == floorId) return f.label;
            }
            return null;
          },
          orElse: () => null,
        );

    return Scaffold(
      appBar: AppBar(
        title: Text(floorLabel ?? 'Floor'),
      ),
      body: apartmentsAsync.when(
        loading: () => const Center(child: CircularProgressIndicator()),
        error: (e, _) => Center(child: Text('Error: $e')),
        data: (apartments) {
          return ListView(
            padding: const EdgeInsets.all(16),
            children: [
              Padding(
                padding: const EdgeInsets.only(bottom: 8),
                child: Text(
                  'Apartments',
                  style: Theme.of(context).textTheme.titleMedium?.copyWith(
                        fontWeight: FontWeight.bold,
                      ),
                ),
              ),
              if (apartments.isEmpty)
                const Padding(
                  padding: EdgeInsets.symmetric(vertical: 24),
                  child: Center(
                    child: Text('No apartments yet.\nTap + to add one.', textAlign: TextAlign.center),
                  ),
                )
              else
                GridView.builder(
                  shrinkWrap: true,
                  physics: const NeverScrollableScrollPhysics(),
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
                        extra: a,
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
                ),
            ],
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
