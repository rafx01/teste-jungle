import { IsIn } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'task' })
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', nullable: true })
  deletedAt: Date;

  @Column({ name: 'title' })
  title: string;

  // @Column({ name: 'users' })
  // users: string;

  @Column({ name: 'description' })
  description: string;

  @Column({ name: 'status' })
  @IsIn(['ALL', 'TODO', 'IN_PROGRESS', 'REVIEW', 'DONE'])
  status: string;

  @Column({ name: 'priority' })
  priority: string;

  @Column({ name: 'due_date' })
  dueDate: Date;
}
