import 'package:flutter/material.dart';
import 'package:just_audio/just_audio.dart';

import '../../core/theme/app_colors.dart';

class AudioPlayerTile extends StatefulWidget {
  final String url;
  final int index;

  const AudioPlayerTile({super.key, required this.url, required this.index});

  @override
  State<AudioPlayerTile> createState() => _AudioPlayerTileState();
}

class _AudioPlayerTileState extends State<AudioPlayerTile> {
  final _player = AudioPlayer();
  bool _loading = false;

  @override
  void dispose() {
    _player.dispose();
    super.dispose();
  }

  Future<void> _togglePlay() async {
    if (_player.processingState == ProcessingState.completed) {
      await _player.seek(Duration.zero);
      await _player.play();
      return;
    }
    if (_player.playing) {
      await _player.pause();
      return;
    }
    if (_player.processingState == ProcessingState.idle) {
      setState(() => _loading = true);
      try {
        await _player.setUrl(widget.url);
      } finally {
        if (mounted) setState(() => _loading = false);
      }
    }
    await _player.play();
  }

  String _format(Duration d) {
    final m = d.inMinutes.remainder(60).toString().padLeft(2, '0');
    final s = d.inSeconds.remainder(60).toString().padLeft(2, '0');
    return '$m:$s';
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.only(bottom: 8),
      padding: const EdgeInsets.symmetric(horizontal: 8),
      decoration: BoxDecoration(
        color: AppColors.primary.withAlpha(13),
        borderRadius: BorderRadius.circular(10),
        border: Border.all(color: AppColors.primary.withAlpha(26)),
      ),
      child: Row(
        children: [
          IconButton(
            icon: _loading
                ? const SizedBox(
                    width: 20,
                    height: 20,
                    child: CircularProgressIndicator(strokeWidth: 2),
                  )
                : StreamBuilder<PlayerState>(
                    stream: _player.playerStateStream,
                    builder: (_, snapshot) {
                      final playing = (snapshot.data?.playing ?? false) &&
                          snapshot.data?.processingState != ProcessingState.completed;
                      return Icon(
                        playing ? Icons.pause_circle : Icons.play_circle,
                        color: AppColors.primary,
                      );
                    },
                  ),
            onPressed: _loading ? null : _togglePlay,
          ),
          Expanded(
            child: Text(
              'Recording ${widget.index + 1}',
              style: const TextStyle(fontWeight: FontWeight.w500),
            ),
          ),
          StreamBuilder<Duration>(
            stream: _player.positionStream,
            builder: (_, snapshot) {
              final position = snapshot.data ?? Duration.zero;
              final duration = _player.duration ?? Duration.zero;
              return Text(
                '${_format(position)} / ${_format(duration)}',
                style: const TextStyle(fontSize: 12, color: Colors.grey),
              );
            },
          ),
          const SizedBox(width: 4),
        ],
      ),
    );
  }
}
