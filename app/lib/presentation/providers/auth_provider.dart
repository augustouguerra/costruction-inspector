import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

import '../../data/models/user_profile_model.dart';
import '../../data/repositories/auth_repository.dart';

final authRepositoryProvider = Provider<AuthRepository>((_) => AuthRepository());

final authSessionProvider = StreamProvider<Session?>((ref) {
  return Supabase.instance.client.auth.onAuthStateChange
      .map((event) => event.session);
});

final currentUserProfileProvider = FutureProvider<UserProfileModel?>((ref) async {
  final session = ref.watch(authSessionProvider).value;
  if (session == null) return null;
  return ref.read(authRepositoryProvider).fetchProfile(session.user.id);
});
