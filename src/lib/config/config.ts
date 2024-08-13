import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import path from 'path';
import { parse } from 'yaml';

@Injectable()
export class AppConfig {
  private config: any;

  constructor() {
    let environment = process.env.NODE_ENV;
    if (environment === '') {
      environment = 'development';
    }

    const fileContents = fs.readFileSync(
      `etc/files/config.${environment}.yaml`,
      'utf8',
    );
    this.config = parse(fileContents);
  }

  getDatabaseConfig() {
    return this.config['database'];
  }
}
