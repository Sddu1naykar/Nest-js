// src/user/user.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
// table name we can specify heare it will describr the structure of table in data base
@Entity('signup')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  // Add other columns as needed, e.g., createdAt, etc.
  // Example:
  // @Column()
  // createdAt: Date;
}
