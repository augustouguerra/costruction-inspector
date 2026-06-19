class RouteNames {
  static const login = '/login';
  static const register = '/register';
  static const projects = '/projects';
  static const projectDetail = '/projects/:projectId';
  static const floors = '/projects/:projectId/floors';
  static const apartments = '/projects/:projectId/floors/:floorId/apartments';
  static const rooms =
      '/projects/:projectId/floors/:floorId/apartments/:apartmentId/rooms';
  static const roomDetail =
      '/projects/:projectId/floors/:floorId/apartments/:apartmentId/rooms/:roomId';
  static const issueDetail = '/issues/:issueId';
  static const notifications = '/notifications';
  static const profile = '/profile';
}
