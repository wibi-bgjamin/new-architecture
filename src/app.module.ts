import { Module } from '@nestjs/common';
import { DummyHandler } from './handler/http/dummy/dummy.handler';
import { DummyUsecase } from './usecase/dummy/dummy.usecase';
import { DummyService } from './service/dummy/dummy.service';
import { DummyDBRepo } from './repo/db/dummy.repo.db';
import { ScheduleModule } from '@nestjs/schedule';
import { DummyHandlerModule } from './handler/http/dummy/dummy.handler.module';
import { DummyCronHandlerModule } from './handler/cron/dummy/dummy.handler.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    DummyHandlerModule,
    DummyCronHandlerModule,
  ],
})
export class AppModule {}
