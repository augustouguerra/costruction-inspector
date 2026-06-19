enum IssueStatus {
  open,
  acknowledged,
  inProgress,
  resolved,
  rejected;

  String get label => switch (this) {
        IssueStatus.open => 'Open',
        IssueStatus.acknowledged => 'Acknowledged',
        IssueStatus.inProgress => 'In Progress',
        IssueStatus.resolved => 'Resolved',
        IssueStatus.rejected => 'Rejected',
      };

  static IssueStatus fromString(String value) {
    return switch (value) {
      'open' => IssueStatus.open,
      'acknowledged' => IssueStatus.acknowledged,
      'in_progress' => IssueStatus.inProgress,
      'resolved' => IssueStatus.resolved,
      'rejected' => IssueStatus.rejected,
      _ => IssueStatus.open,
    };
  }

  String toDbString() => switch (this) {
        IssueStatus.inProgress => 'in_progress',
        _ => name,
      };
}
