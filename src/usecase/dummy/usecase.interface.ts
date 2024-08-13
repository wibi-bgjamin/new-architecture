import { DummyUsecaseParam } from './dto/dummy.dto';
import { someRandomEntity } from './entity/entity.usecase';

export interface DummyUsecaseProvider {
  usecaseHelloWorld(param: DummyUsecaseParam): Promise<void>;
  usecaseRandomStat(): Promise<someRandomEntity | null>;
}
