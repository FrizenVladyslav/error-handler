import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { ApiUseTags } from '@nestjs/swagger';
import { ErrorsService } from './errors.service';
import { Error } from './errors.entity';

@ApiUseTags('errors')
@Crud({
  model: { type: Error },
})
@Controller('errors')
export class ErrorsController {
  constructor(public service: ErrorsService) {}
}
