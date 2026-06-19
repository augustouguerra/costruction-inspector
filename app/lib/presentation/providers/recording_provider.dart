import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

import '../../core/services/audio_service.dart';
import '../../data/repositories/issue_repository.dart';
import 'issue_provider.dart';

enum RecordingStatus { idle, recording, uploading, transcribing, done, error }

class RecordingState {
  final RecordingStatus status;
  final String? transcription;
  final String? detectedTrade;
  final double? confidence;
  final String? errorMessage;
  final String? issueId;

  const RecordingState({
    required this.status,
    this.transcription,
    this.detectedTrade,
    this.confidence,
    this.errorMessage,
    this.issueId,
  });

  RecordingState copyWith({
    RecordingStatus? status,
    String? transcription,
    String? detectedTrade,
    double? confidence,
    String? errorMessage,
    String? issueId,
  }) =>
      RecordingState(
        status: status ?? this.status,
        transcription: transcription ?? this.transcription,
        detectedTrade: detectedTrade ?? this.detectedTrade,
        confidence: confidence ?? this.confidence,
        errorMessage: errorMessage ?? this.errorMessage,
        issueId: issueId ?? this.issueId,
      );
}

final audioServiceProvider = Provider<AudioService>((_) => AudioService());

class RecordingNotifier extends StateNotifier<RecordingState> {
  final AudioService _audioService;
  final IssueRepository _issueRepository;

  RecordingNotifier(this._audioService, this._issueRepository, Ref ref)
      : super(const RecordingState(status: RecordingStatus.idle));

  Future<void> startRecording() async {
    final hasPermission = await _audioService.hasPermission();
    if (!hasPermission) {
      state = state.copyWith(
        status: RecordingStatus.error,
        errorMessage: 'Microphone permission denied.',
      );
      return;
    }
    await _audioService.startRecording();
    state = state.copyWith(status: RecordingStatus.recording);
  }

  Future<void> stopAndProcess(String roomId) async {
    final localPath = await _audioService.stopRecording();
    if (localPath == null) {
      state = state.copyWith(
        status: RecordingStatus.error,
        errorMessage: 'Recording failed.',
      );
      return;
    }

    state = state.copyWith(status: RecordingStatus.uploading);

    try {
      final issue = await _issueRepository.createIssue(roomId: roomId);
      final storagePath =
          await _audioService.uploadAudio(localPath, issue.id);
      await _issueRepository.updateAudioUrl(issue.id, storagePath);

      state = state.copyWith(
        status: RecordingStatus.transcribing,
        issueId: issue.id,
      );

      final result = await Supabase.instance.client.functions.invoke(
        'process-audio',
        body: {'issue_id': issue.id, 'audio_storage_path': storagePath},
      );

      final data = result.data as Map<String, dynamic>;
      state = state.copyWith(
        status: RecordingStatus.done,
        transcription: data['transcription'] as String?,
        detectedTrade: data['trade'] as String?,
        confidence: (data['confidence'] as num?)?.toDouble(),
      );
    } catch (e) {
      state = state.copyWith(
        status: RecordingStatus.error,
        errorMessage: e.toString(),
      );
    }
  }

  void cancelRecording() async {
    await _audioService.stopRecording();
    state = const RecordingState(status: RecordingStatus.idle);
  }

  void reset() {
    state = const RecordingState(status: RecordingStatus.idle);
  }

  Stream<dynamic> get amplitudeStream => _audioService.amplitudeStream;
}

final recordingProvider =
    StateNotifierProvider.autoDispose<RecordingNotifier, RecordingState>((ref) {
  return RecordingNotifier(
    ref.watch(audioServiceProvider),
    ref.watch(issueRepositoryProvider),
    ref,
  );
});
