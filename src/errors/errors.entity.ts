import { PrimaryGeneratedColumn, Column, Entity, ManyToOne, JoinColumn } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';
import { Project } from '../projects/projects.entity';

@Entity()
export class Error {
  @ApiModelProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiModelProperty()
  @Column({ type: 'text' })
  message: string;

  @ApiModelProperty()
  @Column()
  projectId: number;

  @ManyToOne(type => Project, project => project.errors)
  project: Project;
}
