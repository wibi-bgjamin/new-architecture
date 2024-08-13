import { DummyParamDTO } from './dto/dummy.dto';

export interface DummyDBProvider {
  dbHelloWorld(param: DummyParamDTO): Promise<void>;
}
