import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from '../entities/comment.entity';
import { CreateCommentDto } from 'src/tasks/dto/create-comment.dto';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
  ) {}

  async getAllCommentsByTaskId({ id }: { id: string }) {
    return await this.commentRepository.find({
      where: {
        taskId: id,
      },
    });
  }

  async createComment(dto: CreateCommentDto) {
    return await this.commentRepository.save(dto);
  }
}
