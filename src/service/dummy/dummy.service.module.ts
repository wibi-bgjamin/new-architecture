import { Module } from '@nestjs/common';
import { DummyDBRepo } from 'src/repo/db/dummy.repo.db';

@Module({
  providers: [{ provide: 'DummyDBProvider', useClass: DummyDBRepo }],
})
export class DummyServiceModule {}
