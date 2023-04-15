
import { Profile } from 'src/profiles/entities/profile.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';


@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 20, nullable: false })
  username: string;

  @Column({nullable: false})
  password: string;

  @OneToOne(type => Profile, profile => profile.user, {cascade:true})
  @JoinColumn()
  profile: Profile;
}