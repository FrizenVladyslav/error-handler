import { Module } from '@nestjs/common';
import { EnvModule } from './config/env.module';
import { ProjectsModule } from './projects/projects.module';
import { ErrorsModule } from './errors/errors.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnvService } from './config/env.service';

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
    ProjectsModule,
    ErrorsModule,
  ],
})
export class AppModule {}
