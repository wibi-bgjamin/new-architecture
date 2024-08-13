import { Module } from '@nestjs/common';
import { DummyService } from 'src/service/dummy/dummy.service';
import { DummyServiceModule } from 'src/service/dummy/dummy.service.module';

@Module({
  providers: [{ provide: 'DummyServiceProvider', useClass: DummyService }],
})
export class DummyUsecaseModule {}
