import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../core/services/audio_service.dart';
import '../../data/repositories/issue_repository.dart';
import 'issue_provider.dart';

enum RecordingStatus { idle, recording, uploading, done, error }

class RecordingState {
  final RecordingStatus status;
  final String? errorMessage;
  final String? issueId;

  const RecordingState({
    required this.status,
    this.errorMessage,
    this.issueId,
  });

  RecordingState copyWith({
    RecordingStatus? status,
    String? errorMessage,
    String? issueId,
  }) =>
      RecordingState(
        status: status ?? this.status,
        errorMessage: errorMessage ?? this.errorMessage,
        issueId: issueId ?? this.issueId,
      );
}

final audioServiceProvider = Provider<AudioService>((_) => AudioService());

class RecordingNotifier extends StateNotifier<RecordingState> {
  final AudioService _audioService;
  final IssueRepository _issueRepository;

  RecordingNotifier(this._audioService, this._issueRepository)
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

  Future<void> stopAndSave(String roomId) async {
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
      state = state.copyWith(issueId: issue.id);

      await _issueRepository.uploadAudio(issue.id, localPath);

      state = state.copyWith(status: RecordingStatus.done);
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
  );
});
