import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { GetTaskCommentsByIdDto } from 'src/tasks/dto/get-task-comments';
import { CreateCommentDto } from 'src/tasks/dto/create-comment.dto';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Get(':id')
  getAllCommentsByTaskId(@Param() params: GetTaskCommentsByIdDto) {
    return this.commentsService.getAllCommentsByTaskId({
      id: params.id,
    });
  }

  @Post()
  createComment(@Body() comment: CreateCommentDto) {
    return this.commentsService.createComment({
      taskId: comment.taskId,
      text: comment.text,
      userId: comment.userId,
    });
  }
}
