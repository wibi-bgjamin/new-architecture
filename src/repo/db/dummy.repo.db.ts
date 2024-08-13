import { Injectable } from '@nestjs/common';
import { DummyParamDTO } from './dto/dummy.dto';
import { DummyDBProvider } from './repo.interface';

@Injectable()
export class DummyDBRepo implements DummyDBProvider {
  async dbHelloWorld(param: DummyParamDTO): Promise<void> {
    console.log('Hello from dummy DB Repo');
    console.log('this is my param:', param);
    console.log('===========================');
  }
}
