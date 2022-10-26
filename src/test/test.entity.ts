import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  namefull: string;

  @Column({ type: 'simple-array', nullable: true })
  acl: string[];
}
