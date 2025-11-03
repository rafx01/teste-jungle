import { Controller, Get, Param } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { GetTaskCommentsByIdDto } from 'src/tasks/dto/get-task-comments';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Get(':id')
  getAllCommentsByTaskId(@Param() params: GetTaskCommentsByIdDto) {
    return this.commentsService.getAllCommentsByTaskId();
  }
}
