import { Body, Controller, Delete, Param, Post, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { NotificationsService } from './notifications.service';
import { RegisterTokenDto } from './dto/register-token.dto';

@UseGuards(JwtAuthGuard)
@Controller('notifications')
export class NotificationsController {
  constructor(private notificationsService: NotificationsService) {}

  @Post('register-token')
  registerToken(@Request() req, @Body() dto: RegisterTokenDto) {
    return this.notificationsService.registerToken(req.user.id, dto);
  }

  @Delete('token/:token')
  removeToken(@Param('token') token: string) {
    return this.notificationsService.removeToken(token);
  }
}
