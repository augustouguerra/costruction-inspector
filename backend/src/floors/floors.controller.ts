import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { FloorsService } from './floors.service';
import { CreateFloorDto } from './dto/create-floor.dto';

@UseGuards(JwtAuthGuard)
@Controller()
export class FloorsController {
  constructor(private floorsService: FloorsService) {}

  @Get('projects/:projectId/floors')
  findAll(@Param('projectId') projectId: string) {
    return this.floorsService.findAll(projectId);
  }

  @Post('projects/:projectId/floors')
  create(@Param('projectId') projectId: string, @Body() dto: CreateFloorDto) {
    return this.floorsService.create(projectId, dto);
  }

  @Delete('floors/:id')
  remove(@Param('id') id: string) {
    return this.floorsService.remove(id);
  }
}
