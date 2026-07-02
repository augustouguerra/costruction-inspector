import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../presentation/providers/auth_provider.dart';
import '../../data/models/project_model.dart';
import '../../data/models/floor_model.dart';
import '../../data/models/apartment_model.dart';
import '../../data/models/room_model.dart';
import '../../presentation/screens/auth/login_screen.dart';
import '../../presentation/screens/auth/register_screen.dart';
import '../../presentation/screens/projects/projects_list_screen.dart';
import '../../presentation/screens/projects/project_detail_screen.dart';
import '../../presentation/screens/apartments/apartment_list_screen.dart';
import '../../presentation/screens/rooms/room_list_screen.dart';
import '../../presentation/screens/rooms/room_detail_screen.dart';
import '../../presentation/screens/issues/issue_detail_screen.dart';
import '../../presentation/screens/notifications/notifications_screen.dart';
import '../../presentation/screens/profile/profile_screen.dart';

final appRouterProvider = Provider<GoRouter>((ref) {
  final authState = ref.watch(authTokenProvider);

  return GoRouter(
    initialLocation: '/projects',
    redirect: (context, state) {
      final isLoggedIn = authState.value != null;
      final isLoading = authState.isLoading;
      if (isLoading) return null;

      final isAuthRoute = state.matchedLocation == '/login' ||
          state.matchedLocation == '/register';

      if (!isLoggedIn && !isAuthRoute) return '/login';
      if (isLoggedIn && isAuthRoute) return '/projects';
      return null;
    },
    routes: [
      GoRoute(path: '/login', builder: (_, __) => const LoginScreen()),
      GoRoute(path: '/register', builder: (_, __) => const RegisterScreen()),
      GoRoute(path: '/projects', builder: (_, __) => const ProjectsListScreen()),
      GoRoute(
        path: '/projects/:projectId',
        builder: (_, state) => ProjectDetailScreen(
          projectId: state.pathParameters['projectId']!,
          initialProjectName: (state.extra as ProjectModel?)?.name,
        ),
      ),
      GoRoute(
        path: '/projects/:projectId/floors/:floorId/apartments',
        builder: (_, state) => ApartmentListScreen(
          projectId: state.pathParameters['projectId']!,
          floorId: state.pathParameters['floorId']!,
          initialFloorLabel: (state.extra as FloorModel?)?.label,
        ),
      ),
      GoRoute(
        path: '/projects/:projectId/floors/:floorId/apartments/:apartmentId/rooms',
        builder: (_, state) => RoomListScreen(
          projectId: state.pathParameters['projectId']!,
          floorId: state.pathParameters['floorId']!,
          apartmentId: state.pathParameters['apartmentId']!,
          initialApartmentIdentifier: (state.extra as ApartmentModel?)?.identifier,
        ),
      ),
      GoRoute(
        path: '/projects/:projectId/floors/:floorId/apartments/:apartmentId/rooms/:roomId',
        builder: (_, state) => RoomDetailScreen(
          projectId: state.pathParameters['projectId']!,
          floorId: state.pathParameters['floorId']!,
          apartmentId: state.pathParameters['apartmentId']!,
          roomId: state.pathParameters['roomId']!,
          initialRoomName: (state.extra as RoomModel?)?.name,
        ),
      ),
      GoRoute(
        path: '/issues/:issueId',
        builder: (_, state) =>
            IssueDetailScreen(issueId: state.pathParameters['issueId']!),
      ),
      GoRoute(
        path: '/notifications',
        builder: (_, __) => const NotificationsScreen(),
      ),
      GoRoute(path: '/profile', builder: (_, __) => const ProfileScreen()),
    ],
    errorBuilder: (_, state) => Scaffold(
      body: Center(child: Text('Page not found: ${state.error}')),
    ),
  );
});
