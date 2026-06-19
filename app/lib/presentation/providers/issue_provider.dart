import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../data/models/issue_model.dart';
import '../../data/repositories/issue_repository.dart';

final issueRepositoryProvider =
    Provider<IssueRepository>((_) => IssueRepository());

final roomIssuesProvider =
    FutureProvider.family<List<IssueModel>, String>((ref, roomId) {
  return ref.read(issueRepositoryProvider).fetchIssues(roomId);
});
