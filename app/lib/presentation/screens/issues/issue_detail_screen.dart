// ignore_for_file: unused_import
import 'dart:io';

import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:image_picker/image_picker.dart';
import '../../../core/theme/app_colors.dart';
import '../../../data/models/issue_model.dart';
import '../../../data/repositories/issue_repository.dart' show IssueRepository;
import '../../../domain/enums/issue_status.dart';
import '../../providers/issue_provider.dart';
import '../../widgets/audio_player_tile.dart';
import '../../widgets/trade_badge.dart';

Color _statusColor(IssueStatus status) => switch (status) {
      IssueStatus.open => AppColors.warning,
      IssueStatus.acknowledged => AppColors.primaryLight,
      IssueStatus.inProgress => const Color(0xFF8E44AD),
      IssueStatus.resolved => AppColors.success,
      IssueStatus.rejected => AppColors.error,
    };

class IssueDetailScreen extends ConsumerStatefulWidget {
  final String issueId;
  const IssueDetailScreen({super.key, required this.issueId});

  @override
  ConsumerState<IssueDetailScreen> createState() => _IssueDetailScreenState();
}

class _IssueDetailScreenState extends ConsumerState<IssueDetailScreen> {
  IssueModel? _issue;
  List<String> _photoUrls = [];
  List<String> _audioUrls = [];
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
      final photoUrls = await repo.fetchPhotoUrls(widget.issueId);
      final audioUrls = await repo.fetchAudioUrls(widget.issueId);
      if (mounted) {
        setState(() {
          _issue = issue;
          _photoUrls = photoUrls;
          _audioUrls = audioUrls;
          _loading = false;
        });
      }
    }
  }

  Future<void> _pickPhoto() async {
    final picker = ImagePicker();
    final picked = await picker.pickImage(source: ImageSource.camera, imageQuality: 80);
    if (picked == null) return;

    await ref.read(issueRepositoryProvider).addPhoto(widget.issueId, picked.path);
    await _loadIssue();
  }

  Widget _sectionHeader(IconData icon, String label) {
    return Row(
      children: [
        Icon(icon, size: 16, color: AppColors.primary),
        const SizedBox(width: 6),
        Text(
          label,
          style: const TextStyle(
            fontWeight: FontWeight.w700,
            fontSize: 13,
            letterSpacing: 0.2,
            color: AppColors.onSurface,
          ),
        ),
      ],
    );
  }

  Widget _sectionCard({required Widget child}) {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(14),
        border: Border.all(color: Colors.grey.withAlpha(30)),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withAlpha(8),
            blurRadius: 6,
            offset: const Offset(0, 2),
          ),
        ],
      ),
      child: child,
    );
  }

  @override
  Widget build(BuildContext context) {
    if (_loading) {
      return const Scaffold(body: Center(child: CircularProgressIndicator()));
    }
    if (_issue == null) {
      return const Scaffold(
        body: Center(
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Icon(Icons.search_off, size: 48, color: Colors.grey),
              SizedBox(height: 12),
              Text('Issue not found'),
            ],
          ),
        ),
      );
    }

    final issue = _issue!;
    final statusColor = _statusColor(issue.status);

    return Scaffold(
      backgroundColor: AppColors.surface,
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
            _sectionCard(
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
                        color: statusColor,
                        onChanged: (s) async {
                          await ref.read(issueRepositoryProvider).updateStatus(issue.id, s);
                          await _loadIssue();
                        },
                      ),
                    ],
                  ),
                  if (issue.title != null) ...[
                    const SizedBox(height: 14),
                    Text(
                      issue.title!,
                      style: Theme.of(context).textTheme.titleLarge?.copyWith(
                            fontWeight: FontWeight.bold,
                            color: AppColors.onSurface,
                          ),
                    ),
                  ],
                  const SizedBox(height: 10),
                  Row(
                    children: [
                      const Icon(Icons.schedule, size: 13, color: Colors.grey),
                      const SizedBox(width: 4),
                      Text(
                        _formatDate(issue.createdAt),
                        style: const TextStyle(color: Colors.grey, fontSize: 12),
                      ),
                    ],
                  ),
                ],
              ),
            ),
            if (issue.description != null) ...[
              const SizedBox(height: 16),
              _sectionHeader(Icons.notes, 'DESCRIPTION'),
              const SizedBox(height: 8),
              _sectionCard(
                child: Text(
                  issue.description!,
                  style: const TextStyle(height: 1.4),
                ),
              ),
            ],
            if (_audioUrls.isNotEmpty) ...[
              const SizedBox(height: 16),
              _sectionHeader(Icons.mic, 'RECORDINGS'),
              const SizedBox(height: 8),
              ...List.generate(
                _audioUrls.length,
                (i) => AudioPlayerTile(url: _audioUrls[i], index: i),
              ),
            ],
            if (_photoUrls.isNotEmpty) ...[
              const SizedBox(height: 16),
              _sectionHeader(Icons.photo_library, 'PHOTOS'),
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
                  borderRadius: BorderRadius.circular(10),
                  child: CachedNetworkImage(
                    imageUrl: _photoUrls[i],
                    fit: BoxFit.cover,
                    placeholder: (_, __) =>
                        Container(color: Colors.grey[200], child: const Icon(Icons.photo, color: Colors.grey)),
                    errorWidget: (_, __, ___) =>
                        Container(color: Colors.grey[200], child: const Icon(Icons.broken_image, color: Colors.grey)),
                  ),
                ),
              ),
            ],
            const SizedBox(height: 8),
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
  final Color color;
  final ValueChanged<IssueStatus> onChanged;

  const _StatusDropdown({
    required this.issueId,
    required this.current,
    required this.color,
    required this.onChanged,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 2),
      decoration: BoxDecoration(
        color: color.withAlpha(26),
        border: Border.all(color: color),
        borderRadius: BorderRadius.circular(20),
      ),
      child: DropdownButtonHideUnderline(
        child: DropdownButton<IssueStatus>(
          value: current,
          icon: Icon(Icons.arrow_drop_down, color: color),
          style: TextStyle(color: color, fontSize: 13, fontWeight: FontWeight.w600),
          dropdownColor: Colors.white,
          items: IssueStatus.values
              .map((s) => DropdownMenuItem(value: s, child: Text(s.label)))
              .toList(),
          onChanged: (v) { if (v != null) onChanged(v); },
        ),
      ),
    );
  }
}
