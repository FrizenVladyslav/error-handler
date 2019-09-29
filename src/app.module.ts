import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MorganModule, MorganInterceptor } from 'nest-morgan';
import { EnvModule } from './config/env.module';
import { ProjectsModule } from './projects/projects.module';
import { ErrorsModule } from './errors/errors.module';
import { EnvService } from './config/env.service';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [EnvModule],
      useFactory: (env: EnvService) => ({
        type: 'postgres',
        host: env.read.DB_HOST,
        port: env.read.DB_PORT,
        username: env.read.DB_USER,
        password: env.read.DB_PASSWORD,
        database: env.read.DB_NAME,
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
        ssl: true,
      }),
      inject: [EnvService],
    }),
    MorganModule.forRoot(),
    ProjectsModule,
    ErrorsModule,
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: MorganInterceptor('dev'),
    },
  ],
})
export class AppModule {}
