// ignore_for_file: unused_import
import 'dart:io';

import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:image_picker/image_picker.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

import '../../../core/constants/app_constants.dart';
import '../../../data/models/issue_model.dart';
import '../../../data/repositories/issue_repository.dart' show IssueRepository;
import '../../../domain/enums/issue_status.dart';
import '../../providers/issue_provider.dart';
import '../../widgets/trade_badge.dart';

class IssueDetailScreen extends ConsumerStatefulWidget {
  final String issueId;
  const IssueDetailScreen({super.key, required this.issueId});

  @override
  ConsumerState<IssueDetailScreen> createState() => _IssueDetailScreenState();
}

class _IssueDetailScreenState extends ConsumerState<IssueDetailScreen> {
  IssueModel? _issue;
  List<String> _photoUrls = [];
  bool _loading = true;

  @override
  void initState() {
    super.initState();
    _loadIssue();
  }

  Future<void> _loadIssue() async {
    final repo = ref.read(issueRepositoryProvider);
    final issue = await repo.fetchIssue(widget.issueId);
    if (issue != null) {
      final urls = await repo.fetchPhotoUrls(widget.issueId);
      if (mounted) setState(() { _issue = issue; _photoUrls = urls; _loading = false; });
    }
  }

  Future<void> _pickPhoto() async {
    final picker = ImagePicker();
    final picked = await picker.pickImage(source: ImageSource.camera, imageQuality: 80);
    if (picked == null) return;

    final client = Supabase.instance.client;
    final userId = client.auth.currentUser!.id;
    final fileName = '${DateTime.now().millisecondsSinceEpoch}.jpg';
    final storagePath = '$userId/${widget.issueId}/$fileName';

    final file = File(picked.path);
    await client.storage.from(AppConstants.photosBucket).upload(storagePath, file);
    await ref.read(issueRepositoryProvider).addPhoto(widget.issueId, storagePath);
    await _loadIssue();
  }

  @override
  Widget build(BuildContext context) {
    if (_loading) {
      return const Scaffold(body: Center(child: CircularProgressIndicator()));
    }
    if (_issue == null) {
      return const Scaffold(body: Center(child: Text('Issue not found')));
    }

    final issue = _issue!;

    return Scaffold(
      appBar: AppBar(
        title: const Text('Issue Detail'),
        actions: [
          IconButton(icon: const Icon(Icons.add_a_photo), onPressed: _pickPhoto),
        ],
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              children: [
                TradeBadge(trade: issue.assignedTrade),
                const Spacer(),
                _StatusDropdown(
                  issueId: issue.id,
                  current: issue.status,
                  onChanged: (s) async {
                    await ref.read(issueRepositoryProvider).updateStatus(issue.id, s);
                    await _loadIssue();
                  },
                ),
              ],
            ),
            if (issue.title != null) ...[
              const SizedBox(height: 16),
              Text(issue.title!, style: Theme.of(context).textTheme.titleLarge?.copyWith(fontWeight: FontWeight.bold)),
            ],
            if (issue.description != null) ...[
              const SizedBox(height: 12),
              const Text('Transcription', style: TextStyle(fontWeight: FontWeight.w600, color: Colors.grey)),
              const SizedBox(height: 4),
              Container(
                width: double.infinity,
                padding: const EdgeInsets.all(12),
                decoration: BoxDecoration(
                  color: Colors.grey[100],
                  borderRadius: BorderRadius.circular(8),
                ),
                child: Text(issue.description!),
              ),
            ],
            if (issue.audioFileUrl != null) ...[
              const SizedBox(height: 12),
              const Row(
                children: [
                  Icon(Icons.audio_file, color: Colors.grey),
                  SizedBox(width: 8),
                  Text('Audio recording attached', style: TextStyle(color: Colors.grey)),
                ],
              ),
            ],
            if (_photoUrls.isNotEmpty) ...[
              const SizedBox(height: 16),
              const Text('Photos', style: TextStyle(fontWeight: FontWeight.w600)),
              const SizedBox(height: 8),
              GridView.builder(
                shrinkWrap: true,
                physics: const NeverScrollableScrollPhysics(),
                gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                  crossAxisCount: 3,
                  crossAxisSpacing: 8,
                  mainAxisSpacing: 8,
                ),
                itemCount: _photoUrls.length,
                itemBuilder: (_, i) => ClipRRect(
                  borderRadius: BorderRadius.circular(8),
                  child: CachedNetworkImage(
                    imageUrl: _photoUrls[i],
                    fit: BoxFit.cover,
                    placeholder: (_, __) =>
                        Container(color: Colors.grey[200], child: const Icon(Icons.photo)),
                    errorWidget: (_, __, ___) =>
                        Container(color: Colors.grey[200], child: const Icon(Icons.broken_image)),
                  ),
                ),
              ),
            ],
            const SizedBox(height: 12),
            Text(
              'Created: ${_formatDate(issue.createdAt)}',
              style: const TextStyle(color: Colors.grey, fontSize: 12),
            ),
          ],
        ),
      ),
    );
  }

  String _formatDate(DateTime dt) =>
      '${dt.day}/${dt.month}/${dt.year} ${dt.hour.toString().padLeft(2, '0')}:${dt.minute.toString().padLeft(2, '0')}';
}

class _StatusDropdown extends StatelessWidget {
  final String issueId;
  final IssueStatus current;
  final ValueChanged<IssueStatus> onChanged;

  const _StatusDropdown({
    required this.issueId,
    required this.current,
    required this.onChanged,
  });

  @override
  Widget build(BuildContext context) {
    return DropdownButton<IssueStatus>(
      value: current,
      underline: const SizedBox(),
      items: IssueStatus.values
          .map((s) => DropdownMenuItem(value: s, child: Text(s.label)))
          .toList(),
      onChanged: (v) { if (v != null) onChanged(v); },
    );
  }
}
