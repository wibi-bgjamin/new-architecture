import { Controller, Get, Header, Inject } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { DummyUsecaseParam } from 'src/usecase/dummy/dto/dummy.dto';
import { DummyUsecase } from 'src/usecase/dummy/dummy.usecase';
import { DummyUsecaseProvider } from 'src/usecase/dummy/usecase.interface';

@Controller()
export class DummyCronHandler {
  constructor(
    @Inject('DummyUsecaseProvider')
    private readonly dummyUsecase: DummyUsecaseProvider,
  ) {}

  @Cron(CronExpression.EVERY_10_SECONDS)
  async testing() {
    console.log('Hello from cron dummy handler');
    console.log('===========================');

    const args: DummyUsecaseParam = {
      someParameter: 'hello',
    };

    await this.dummyUsecase.usecaseHelloWorld(args);
  }
}
