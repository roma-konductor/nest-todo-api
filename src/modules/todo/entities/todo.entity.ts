import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text'})
  title: string;

  @Column({ default: false })
  isCompleted: boolean;
}