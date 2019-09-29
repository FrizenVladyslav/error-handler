import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ErrorsController } from './errors.controller';
import { Error } from './errors.entity';
import { ErrorsService } from './errors.service';

@Module({
  controllers: [ErrorsController],
  imports: [TypeOrmModule.forFeature([Error])],
  providers: [ErrorsService],
})
export class ErrorsModule {}
