import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  InternalServerErrorException,
  CallHandler,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorsInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next
      .handle()
      .pipe(
        catchError(e => {
          if (e.message.indexOf('duplicate key') !== -1) {
            throw new HttpException({
              status: HttpStatus.BAD_REQUEST,
              error: 'Name should be unique',
            }, 400);
          } else throw e
        }),
      );
  }
}
