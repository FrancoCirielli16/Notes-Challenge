import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, ManyToMany, JoinTable } from 'typeorm';
//import { Category } from './categorie.entity';

@Entity()
export class Note {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  // @ManyToMany(() => Category)
  // @JoinTable()
  // categories: Category[];

  @Column()
  categories:string;

  @UpdateDateColumn()
  last_edited: Date;

  @Column({ default: false })
  archived: boolean;
}
