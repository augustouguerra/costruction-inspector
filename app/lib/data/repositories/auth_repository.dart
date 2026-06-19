import 'package:supabase_flutter/supabase_flutter.dart';

import '../models/user_profile_model.dart';
import '../../domain/enums/trade_type.dart';
import '../../domain/enums/user_role.dart';

class AuthRepository {
  final _client = Supabase.instance.client;

  Stream<AuthState> get authStateChanges => _client.auth.onAuthStateChange;

  Session? get currentSession => _client.auth.currentSession;

  Future<AuthResponse> signUp({
    required String email,
    required String password,
    required String fullName,
    required UserRole role,
    TradeType? trade,
  }) =>
      _client.auth.signUp(
        email: email,
        password: password,
        data: {
          'full_name': fullName,
          'role': role.toDbString(),
          if (trade != null) 'trade': trade.name,
        },
      );

  Future<AuthResponse> signIn({
    required String email,
    required String password,
  }) =>
      _client.auth.signInWithPassword(email: email, password: password);

  Future<void> signOut() => _client.auth.signOut();

  Future<UserProfileModel?> fetchProfile(String userId) async {
    final data = await _client
        .from('user_profiles')
        .select()
        .eq('id', userId)
        .maybeSingle();
    if (data != null) return UserProfileModel.fromJson(data);

    // Profile missing — user registered before the DB trigger was added.
    // Create it now using the metadata stored during signUp.
    final meta = _client.auth.currentUser?.userMetadata ?? {};
    await _client.from('user_profiles').upsert(
      {
        'id': userId,
        'full_name': meta['full_name'] ?? 'Unknown',
        'role': meta['role'] ?? 'architect',
        if (meta['trade'] != null && (meta['trade'] as String).isNotEmpty)
          'trade': meta['trade'],
      },
      onConflict: 'id',
    );
    final created = await _client
        .from('user_profiles')
        .select()
        .eq('id', userId)
        .single();
    return UserProfileModel.fromJson(created);
  }

  Future<void> updateProfile(String userId, Map<String, dynamic> updates) =>
      _client.from('user_profiles').update(updates).eq('id', userId);
}
