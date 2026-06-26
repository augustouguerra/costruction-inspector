import {
  Body, Controller, Delete, Get, Param, Patch, Post,
  Request, UploadedFile, UseGuards, UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { IssuesService } from './issues.service';
import { CreateIssueDto } from './dto/create-issue.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { AddCommentDto } from './dto/add-comment.dto';

@UseGuards(JwtAuthGuard)
@Controller()
export class IssuesController {
  constructor(private issuesService: IssuesService) {}

  @Get('rooms/:roomId/issues')
  findByRoom(@Param('roomId') roomId: string) {
    return this.issuesService.findByRoom(roomId);
  }

  @Post('issues')
  create(@Request() req, @Body() dto: CreateIssueDto) {
    return this.issuesService.create(req.user.id, dto);
  }

  @Get('issues/:id')
  findOne(@Param('id') id: string) {
    return this.issuesService.findOne(id);
  }

  @Patch('issues/:id/status')
  updateStatus(@Param('id') id: string, @Body() dto: UpdateStatusDto) {
    return this.issuesService.updateStatus(id, dto);
  }

  @Delete('issues/:id')
  remove(@Param('id') id: string) {
    return this.issuesService.remove(id);
  }

  @Post('issues/:id/process-audio')
  @UseInterceptors(FileInterceptor('audio', { storage: memoryStorage() }))
  processAudio(
    @Request() req,
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.issuesService.processAudio(id, req.user.id, file);
  }

  @Post('issues/:id/photos')
  @UseInterceptors(FileInterceptor('photo', { storage: memoryStorage() }))
  addPhoto(
    @Request() req,
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.issuesService.addPhoto(id, req.user.id, file);
  }

  @Get('issues/:id/photos')
  getPhotos(@Param('id') id: string) {
    return this.issuesService.getPhotos(id);
  }

  @Post('issues/:id/comments')
  addComment(@Request() req, @Param('id') id: string, @Body() dto: AddCommentDto) {
    return this.issuesService.addComment(id, req.user.id, dto);
  }
}
