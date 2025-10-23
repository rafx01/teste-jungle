import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  Unique,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity('task_assignments')
@Unique(['task_id', 'user_id'])
export class TaskAssignment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', nullable: true })
  deletedAt: Date;

  @Column({ type: 'uuid' })
  task_id: string;

  @Column({ type: 'uuid' })
  user_id: string;

  @CreateDateColumn()
  assigned_at: Date;
}
