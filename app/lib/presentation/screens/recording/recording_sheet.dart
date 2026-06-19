import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../providers/recording_provider.dart';
import '../../widgets/trade_badge.dart';
import '../../../domain/enums/trade_type.dart';

class RecordingSheet extends ConsumerStatefulWidget {
  final String roomId;
  const RecordingSheet({super.key, required this.roomId});

  @override
  ConsumerState<RecordingSheet> createState() => _RecordingSheetState();
}

class _RecordingSheetState extends ConsumerState<RecordingSheet>
    with SingleTickerProviderStateMixin {
  late AnimationController _pulseController;

  @override
  void initState() {
    super.initState();
    _pulseController = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 800),
    )..repeat(reverse: true);
  }

  @override
  void dispose() {
    _pulseController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final state = ref.watch(recordingProvider);
    final notifier = ref.read(recordingProvider.notifier);

    return Container(
      decoration: const BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.vertical(top: Radius.circular(24)),
      ),
      padding: const EdgeInsets.all(24),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          Container(
            width: 40,
            height: 4,
            decoration: BoxDecoration(
              color: Colors.grey[300],
              borderRadius: BorderRadius.circular(2),
            ),
          ),
          const SizedBox(height: 24),
          _buildContent(context, state, notifier),
          const SizedBox(height: 24),
        ],
      ),
    );
  }

  Widget _buildContent(
    BuildContext context,
    RecordingState state,
    RecordingNotifier notifier,
  ) {
    switch (state.status) {
      case RecordingStatus.idle:
        return _buildIdle(notifier);
      case RecordingStatus.recording:
        return _buildRecording(notifier);
      case RecordingStatus.uploading:
      case RecordingStatus.transcribing:
        return _buildProcessing(state);
      case RecordingStatus.done:
        return _buildDone(context, state, notifier);
      case RecordingStatus.error:
        return _buildError(context, state, notifier);
    }
  }

  Widget _buildIdle(RecordingNotifier notifier) {
    return Column(
      children: [
        const Text(
          'Record an Issue',
          style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
        ),
        const SizedBox(height: 8),
        const Text(
          'Describe the issue and mention the trade.\ne.g. "Plumber: the faucet is leaking."',
          textAlign: TextAlign.center,
          style: TextStyle(color: Colors.grey),
        ),
        const SizedBox(height: 32),
        GestureDetector(
          onTap: notifier.startRecording,
          child: Container(
            width: 80,
            height: 80,
            decoration: BoxDecoration(
              color: const Color(0xFF1B4F72),
              shape: BoxShape.circle,
              boxShadow: [
                BoxShadow(
                  color: const Color(0xFF1B4F72).withAlpha(77),
                  blurRadius: 20,
                  spreadRadius: 5,
                ),
              ],
            ),
            child: const Icon(Icons.mic, color: Colors.white, size: 40),
          ),
        ),
        const SizedBox(height: 16),
        const Text('Tap to start recording', style: TextStyle(color: Colors.grey)),
      ],
    );
  }

  Widget _buildRecording(RecordingNotifier notifier) {
    return Column(
      children: [
        const Text(
          'Recording...',
          style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold, color: Colors.red),
        ),
        const SizedBox(height: 32),
        AnimatedBuilder(
          animation: _pulseController,
          builder: (_, __) => Container(
            width: 80 + (_pulseController.value * 20),
            height: 80 + (_pulseController.value * 20),
            decoration: BoxDecoration(
              color: Colors.red.withAlpha(((0.8 - _pulseController.value * 0.3) * 255).round()),
              shape: BoxShape.circle,
            ),
            child: const Icon(Icons.mic, color: Colors.white, size: 40),
          ),
        ),
        const SizedBox(height: 24),
        FilledButton.icon(
          onPressed: () => notifier.stopAndProcess(widget.roomId),
          icon: const Icon(Icons.stop),
          label: const Text('Stop & Process'),
          style: FilledButton.styleFrom(backgroundColor: Colors.red),
        ),
        const SizedBox(height: 8),
        TextButton(
          onPressed: notifier.cancelRecording,
          child: const Text('Cancel', style: TextStyle(color: Colors.grey)),
        ),
      ],
    );
  }

  Widget _buildProcessing(RecordingState state) {
    final label = state.status == RecordingStatus.uploading
        ? 'Uploading audio...'
        : 'Transcribing with AI...';
    return Column(
      children: [
        const CircularProgressIndicator(),
        const SizedBox(height: 24),
        Text(label, style: const TextStyle(fontSize: 16)),
      ],
    );
  }

  Widget _buildDone(
    BuildContext context,
    RecordingState state,
    RecordingNotifier notifier,
  ) {
    final trade = state.detectedTrade != null
        ? TradeType.fromString(state.detectedTrade!)
        : TradeType.unknown;

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const Row(
          children: [
            Icon(Icons.check_circle, color: Colors.green, size: 28),
            SizedBox(width: 8),
            Text('Issue Created', style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold)),
          ],
        ),
        const SizedBox(height: 16),
        Row(
          children: [
            const Text('Detected trade: ', style: TextStyle(color: Colors.grey)),
            TradeBadge(trade: trade),
          ],
        ),
        if (state.transcription != null) ...[
          const SizedBox(height: 12),
          const Text('Transcription:', style: TextStyle(fontWeight: FontWeight.w600)),
          const SizedBox(height: 4),
          Container(
            padding: const EdgeInsets.all(12),
            decoration: BoxDecoration(
              color: Colors.grey[100],
              borderRadius: BorderRadius.circular(8),
            ),
            child: Text(state.transcription!),
          ),
        ],
        const SizedBox(height: 24),
        SizedBox(
          width: double.infinity,
          child: FilledButton(
            onPressed: () {
              notifier.reset();
              Navigator.pop(context);
            },
            child: const Text('Done'),
          ),
        ),
        TextButton(
          onPressed: notifier.reset,
          child: const Text('Record another issue'),
        ),
      ],
    );
  }

  Widget _buildError(
    BuildContext context,
    RecordingState state,
    RecordingNotifier notifier,
  ) {
    return Column(
      children: [
        const Icon(Icons.error_outline, color: Colors.red, size: 48),
        const SizedBox(height: 12),
        const Text('Something went wrong', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
        const SizedBox(height: 8),
        Text(state.errorMessage ?? 'Unknown error', textAlign: TextAlign.center, style: const TextStyle(color: Colors.grey)),
        const SizedBox(height: 24),
        FilledButton.icon(
          onPressed: notifier.reset,
          icon: const Icon(Icons.refresh),
          label: const Text('Try Again'),
        ),
        TextButton(
          onPressed: () { notifier.reset(); Navigator.pop(context); },
          child: const Text('Cancel'),
        ),
      ],
    );
  }
}
