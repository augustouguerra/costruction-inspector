import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { ProjectsModule } from './projects/projects.module';
import { FloorsModule } from './floors/floors.module';
import { ApartmentsModule } from './apartments/apartments.module';
import { RoomsModule } from './rooms/rooms.module';
import { IssuesModule } from './issues/issues.module';
import { NotificationsModule } from './notifications/notifications.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    AuthModule,
    ProjectsModule,
    FloorsModule,
    ApartmentsModule,
    RoomsModule,
    IssuesModule,
    NotificationsModule,
  ],
})
export class AppModule {}
