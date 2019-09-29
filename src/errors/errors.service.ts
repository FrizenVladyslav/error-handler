import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Error } from './errors.entity';

@Injectable()
export class ErrorsService extends TypeOrmCrudService<Error> {
  constructor(@InjectRepository(Error) repo) {
    super(repo);
  }
}
