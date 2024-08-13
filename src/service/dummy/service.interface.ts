import { DummyServiceParam } from './dto/dummy.dto';

export interface ServiceProvider {
  serviceHelloWorld(param: DummyServiceParam): Promise<void>;
}
