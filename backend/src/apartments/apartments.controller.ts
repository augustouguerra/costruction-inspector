import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApartmentsService } from './apartments.service';
import { CreateApartmentDto } from './dto/create-apartment.dto';

@UseGuards(JwtAuthGuard)
@Controller()
export class ApartmentsController {
  constructor(private apartmentsService: ApartmentsService) {}

  @Get('floors/:floorId/apartments')
  findAll(@Param('floorId') floorId: string) {
    return this.apartmentsService.findAll(floorId);
  }

  @Post('floors/:floorId/apartments')
  create(@Param('floorId') floorId: string, @Body() dto: CreateApartmentDto) {
    return this.apartmentsService.create(floorId, dto);
  }

  @Delete('apartments/:id')
  remove(@Param('id') id: string) {
    return this.apartmentsService.remove(id);
  }
}
