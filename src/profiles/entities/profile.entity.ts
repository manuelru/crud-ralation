import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: false})
  fullName: string;

  @Column({nullable: false})
  address: string;

  @Column({ default: false })
  receivePromotions: boolean;

  @OneToOne(type => User, user => user.profile)
  user: User;
}