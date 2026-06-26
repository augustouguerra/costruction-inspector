import '../../core/services/api_client.dart';
import '../../domain/enums/trade_type.dart';
import '../../domain/enums/user_role.dart';
import '../models/user_profile_model.dart';

class AuthRepository {
  final ApiClient _api;
  AuthRepository(this._api);

  Future<String> signUp({
    required String email,
    required String password,
    required String fullName,
    required UserRole role,
    TradeType? trade,
  }) async {
    final res = await _api.dio.post('/auth/register', data: {
      'email': email,
      'password': password,
      'fullName': fullName,
      'role': role.toDbString(),
      if (trade != null) 'trade': trade.name,
    });
    final token = res.data['token'] as String;
    await _api.saveToken(token);
    return token;
  }

  Future<String> signIn({
    required String email,
    required String password,
  }) async {
    final res = await _api.dio.post('/auth/login', data: {
      'email': email,
      'password': password,
    });
    final token = res.data['token'] as String;
    await _api.saveToken(token);
    return token;
  }

  Future<void> signOut() => _api.clearToken();

  Future<UserProfileModel?> fetchProfile() async {
    final res = await _api.dio.get('/auth/me');
    return UserProfileModel.fromJson(res.data as Map<String, dynamic>);
  }

  Future<void> updateProfile(Map<String, dynamic> updates) async {
    await _api.dio.patch('/auth/profile', data: updates);
  }
}
