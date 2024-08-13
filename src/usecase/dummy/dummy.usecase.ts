import { Inject, Injectable } from '@nestjs/common';
import { DummyUsecaseParam } from './dto/dummy.dto';
import { DummyService } from 'src/service/dummy/dummy.service';
import { DummyServiceParam } from 'src/service/dummy/dto/dummy.dto';
import { DummyUsecaseProvider } from './usecase.interface';
import { ServiceProvider } from 'src/service/dummy/service.interface';
import { someRandomEntity } from './entity/entity.usecase';
import { AppConfig } from 'src/lib/config/config';

@Injectable()
export class DummyUsecase implements DummyUsecaseProvider {
  constructor(
    @Inject('DummyServiceProvider') private readonly service: ServiceProvider,
    private readonly config: AppConfig,
  ) {}

  async usecaseHelloWorld(param: DummyUsecaseParam): Promise<void> {
    console.log('Hello from dummy usecase');
    console.log('this is my param:', param);
    console.log('===========================');

    const args: DummyServiceParam = {
      someParameter: 'hello',
    };
    await this.service.serviceHelloWorld(args);

    const dbConfig = this.config.getDatabaseConfig();
    console.log(dbConfig.host);
    console.log(dbConfig.port);
  }

  async usecaseRandomStat(): Promise<someRandomEntity | null> {
    const result: someRandomEntity = {
      name: 'Lee Ji Eun',
      age: 31,
    };

    return null;
  }
}
