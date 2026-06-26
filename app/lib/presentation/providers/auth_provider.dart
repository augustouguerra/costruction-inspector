import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../core/services/api_client.dart';
import '../../data/models/user_profile_model.dart';
import '../../data/repositories/auth_repository.dart';

final apiClientProvider = Provider<ApiClient>((_) => ApiClient());

final authRepositoryProvider = Provider<AuthRepository>(
  (ref) => AuthRepository(ref.watch(apiClientProvider)),
);

// Mutable auth state: null = logged out, non-null = logged in token.
class AuthNotifier extends AsyncNotifier<String?> {
  @override
  Future<String?> build() async {
    return ref.read(apiClientProvider).getToken();
  }

  Future<void> login(String email, String password) async {
    final token = await ref.read(authRepositoryProvider).signIn(
          email: email,
          password: password,
        );
    state = AsyncData(token);
  }

  Future<void> register({
    required String email,
    required String password,
    required String fullName,
    required dynamic role,
    dynamic trade,
  }) async {
    final token = await ref.read(authRepositoryProvider).signUp(
          email: email,
          password: password,
          fullName: fullName,
          role: role,
          trade: trade,
        );
    state = AsyncData(token);
  }

  Future<void> logout() async {
    await ref.read(authRepositoryProvider).signOut();
    state = const AsyncData(null);
  }
}

final authTokenProvider = AsyncNotifierProvider<AuthNotifier, String?>(AuthNotifier.new);

final currentUserProfileProvider = FutureProvider<UserProfileModel?>((ref) async {
  final token = await ref.watch(authTokenProvider.future);
  if (token == null) return null;
  try {
    return await ref.read(authRepositoryProvider).fetchProfile();
  } catch (_) {
    return null;
  }
});
