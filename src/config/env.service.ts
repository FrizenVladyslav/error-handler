import * as dotenv from 'dotenv';
import * as path from 'path';
import { Injectable } from '@nestjs/common';

export interface EnvData {
  // application
  APP_ENV: string;
  APP_DEBUG: boolean;

  // database
  DB_HOST?: string;
  DB_NAME: string;
  DB_PORT?: number;
  DB_USER: string;
  DB_PASSWORD: string;
}

const root = path.join.bind(this, __dirname);
dotenv.config({ path: root('../.env') });

export default {
  PORT: process.env.PORT || 8080,
  IS_PODUCTION: process.env.NODE_ENV === 'production',
  JWT_SECRET: process.env.JWT_SECRET || 'secret',
  DB: {
    HOST: process.env.HOST || 'localhost',
    NAME: process.env.DB || 'postal',
    USER: process.env.USR || 'root',
    PASSWORD: process.env.PASSWORD || '',
    PORT: process.env.DBPORT || 3306,
  },
}

@Injectable()
export class EnvService {
  private config: EnvData;

  constructor() {
    this.config = {
      APP_ENV: process.env.NODE_ENV || 'development',
      APP_DEBUG: !!process.env.APP_DEBUG,
      DB_HOST: process.env.DB_HOST,
      DB_NAME: process.env.DB_NAME,
      DB_PORT: Number(process.env.DB_PORT),
      DB_USER: process.env.DB_USER,
      DB_PASSWORD: process.env.DB_PASSWORD,
    };
  }

  get read(): EnvData {
    return this.config;
  }

  get isDev(): boolean {
    return this.config.APP_ENV === 'development';
  }

  get isProd(): boolean {
    return this.config.APP_ENV === 'production';
  }
}
