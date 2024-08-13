import {
  Controller,
  Get,
  Header,
  Inject,
  InternalServerErrorException,
} from '@nestjs/common';
import { DummyUsecaseParam } from 'src/usecase/dummy/dto/dummy.dto';
import { DummyUsecase } from 'src/usecase/dummy/dummy.usecase';
import { DummyUsecaseProvider } from 'src/usecase/dummy/usecase.interface';

@Controller('dummy')
export class DummyHandler {
  constructor(
    @Inject('DummyUsecaseProvider')
    private readonly dummyUsecase: DummyUsecaseProvider,
  ) {}

  @Get()
  async helloWorldHandler() {
    console.log('Hello from dummy handler');
    console.log('===========================');

    const args: DummyUsecaseParam = {
      someParameter: 'hello',
    };

    await this.dummyUsecase.usecaseHelloWorld(args);
  }

  @Get('/random')
  async getRandomStat() {
    try {
      const metadata: { [key: string]: string } = {};

      const stat = await this.dummyUsecase.usecaseRandomStat();
      if (!stat) {
        // log the error and metadata here
        throw new InternalServerErrorException();
      }

      // always add unique value to metadata after a function call
      // this will ease debugging process
      // DO NOT ADD ANY PII TO METADATA!!!
      metadata['some_val'] = 'stat';
      return stat;
    } catch (error) {
      const someErrorMessage = {
        err: 'stat not found',
      };

      return someErrorMessage;
    }
  }
}
