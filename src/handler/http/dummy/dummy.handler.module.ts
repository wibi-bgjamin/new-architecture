import { Module } from '@nestjs/common';
import { DummyUsecase } from 'src/usecase/dummy/dummy.usecase';
import { DummyHandler } from './dummy.handler';
import { DummyService } from 'src/service/dummy/dummy.service';
import { DummyDBRepo } from 'src/repo/db/dummy.repo.db';
import { AppConfig } from 'src/lib/config/config';

@Module({
  providers: [
    { provide: 'DummyUsecaseProvider', useClass: DummyUsecase },
    { provide: 'DummyServiceProvider', useClass: DummyService },
    { provide: 'DummyDBProvider', useClass: DummyDBRepo },
    AppConfig,
  ],
  controllers: [DummyHandler],
})
export class DummyHandlerModule {}
