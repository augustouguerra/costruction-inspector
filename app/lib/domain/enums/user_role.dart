enum UserRole {
  architect,
  tradesperson,
  projectManager,
  admin;

  String get label => switch (this) {
        UserRole.architect => 'Architect',
        UserRole.tradesperson => 'Tradesperson',
        UserRole.projectManager => 'Project Manager',
        UserRole.admin => 'Admin',
      };

  static UserRole fromString(String value) {
    return switch (value) {
      'architect' => UserRole.architect,
      'tradesperson' => UserRole.tradesperson,
      'project_manager' => UserRole.projectManager,
      'admin' => UserRole.admin,
      _ => UserRole.tradesperson,
    };
  }

  String toDbString() => switch (this) {
        UserRole.projectManager => 'project_manager',
        _ => name,
      };
}
