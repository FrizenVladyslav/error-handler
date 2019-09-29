import { Controller, UseInterceptors } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { ApiUseTags } from '@nestjs/swagger';
import { ErrorsInterceptor } from './errors.interceptor'
import { ProjectsService } from './projects.service';
import { Project } from './projects.entity';

@UseInterceptors(new ErrorsInterceptor())
@ApiUseTags('projects')
@Crud({
  model: { type: Project },
})
@Controller('projects')
export class ProjectsController {
  constructor(public service: ProjectsService) {}
}
