import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RoomsService } from './rooms.service';
import { CreateRoomDto } from './dto/create-room.dto';

@UseGuards(JwtAuthGuard)
@Controller()
export class RoomsController {
  constructor(private roomsService: RoomsService) {}

  @Get('apartments/:apartmentId/rooms')
  findAll(@Param('apartmentId') apartmentId: string) {
    return this.roomsService.findAll(apartmentId);
  }

  @Post('apartments/:apartmentId/rooms')
  create(@Param('apartmentId') apartmentId: string, @Body() dto: CreateRoomDto) {
    return this.roomsService.create(apartmentId, dto);
  }

  @Delete('rooms/:id')
  remove(@Param('id') id: string) {
    return this.roomsService.remove(id);
  }
}
