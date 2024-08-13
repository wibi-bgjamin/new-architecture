import { Inject, Injectable } from '@nestjs/common';
import { DummyServiceParam } from './dto/dummy.dto';
import { DummyDBRepo } from 'src/repo/db/dummy.repo.db';
import { DummyParamDTO } from 'src/repo/db/dto/dummy.dto';
import { DummyDBProvider } from 'src/repo/db/repo.interface';
import { ServiceProvider } from './service.interface';

@Injectable()
export class DummyService implements ServiceProvider {
  constructor(
    // private readonly db: DummyDBRepo,
    @Inject('DummyDBProvider') private readonly db: DummyDBProvider,
  ) {}

  async serviceHelloWorld(param: DummyServiceParam): Promise<void> {
    console.log('Hello from dummy service');
    console.log('this is my param:', param);
    console.log('===========================');

    const args: DummyParamDTO = {
      someParameter: 'hello',
    };

    await this.db.dbHelloWorld(args);
  }
}
