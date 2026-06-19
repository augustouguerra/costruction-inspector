import 'dart:io';

import 'package:path_provider/path_provider.dart';
import 'package:record/record.dart';
import 'package:supabase_flutter/supabase_flutter.dart';
import 'package:uuid/uuid.dart';

import '../constants/app_constants.dart';

class AudioService {
  final _recorder = AudioRecorder();
  String? _currentPath;

  Future<bool> hasPermission() => _recorder.hasPermission();

  Future<void> startRecording() async {
    final dir = await getTemporaryDirectory();
    _currentPath = '${dir.path}/${const Uuid().v4()}.m4a';
    await _recorder.start(
      const RecordConfig(encoder: AudioEncoder.aacLc, bitRate: 128000),
      path: _currentPath!,
    );
  }

  Future<String?> stopRecording() async {
    final path = await _recorder.stop();
    return path;
  }

  Future<bool> get isRecording => _recorder.isRecording();

  Stream<Amplitude> get amplitudeStream =>
      _recorder.onAmplitudeChanged(const Duration(milliseconds: 100));

  Future<String> uploadAudio(String localPath, String issueId) async {
    final client = Supabase.instance.client;
    final userId = client.auth.currentUser!.id;
    const fileName = 'recording.m4a';
    final storagePath = '$userId/$issueId/$fileName';

    final file = File(localPath);
    await client.storage.from(AppConstants.audioBucket).upload(
          storagePath,
          file,
          fileOptions: const FileOptions(contentType: 'audio/m4a', upsert: true),
        );
    return storagePath;
  }

  String getPublicUrl(String storagePath) => Supabase.instance.client.storage
      .from(AppConstants.audioBucket)
      .getPublicUrl(storagePath);

  void dispose() => _recorder.dispose();
}
