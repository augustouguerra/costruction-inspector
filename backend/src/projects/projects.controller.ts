import { Body, Controller, Delete, Get, Param, Post, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';

@UseGuards(JwtAuthGuard)
@Controller('projects')
export class ProjectsController {
  constructor(private projectsService: ProjectsService) {}

  @Get()
  findAll(@Request() req) {
    return this.projectsService.findAll(req.user.id);
  }

  @Post()
  create(@Request() req, @Body() dto: CreateProjectDto) {
    return this.projectsService.create(req.user.id, dto);
  }

  @Delete(':id')
  remove(@Request() req, @Param('id') id: string) {
    return this.projectsService.remove(req.user.id, id);
  }
}
