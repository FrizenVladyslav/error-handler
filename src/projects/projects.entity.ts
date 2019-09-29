import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';
import { Error } from '../errors/errors.entity';

@Entity()
export class Project {
  @ApiModelProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiModelProperty()
  @Column({ unique: true })
  name: string;

  @OneToMany(() => Error, error => error.project)
  errors: Error[];
}
