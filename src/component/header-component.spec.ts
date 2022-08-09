import Chance from 'chance';
import { MockBuilder, MockInstance, MockRender, MockReset, ngMocks } from 'ng-mocks';
import { AppModule } from 'src/app.module';
import { ConfigService } from 'src/config.service';
import { HeaderComponent } from './header.component';
describe('HeaderComponent', () => {
  const chance = new Chance();
  MockInstance.scope();
  beforeEach(() => ngMocks.autoSpy('jest'));
  afterEach(() => ngMocks.autoSpy('reset'));

  beforeEach(() => {
    const expectedConfig = chance.string();

    MockInstance(ConfigService, 'getAppConfig', jest.fn()).mockReturnValue((expectedConfig));

    return MockBuilder(
      HeaderComponent,
      AppModule
    );
  });

  afterEach(MockReset);

  it('should create component', () => {
    const fixture = MockRender(HeaderComponent, {});
    const component = fixture.point.componentInstance;
    expect(component).toBeDefined();    
  });
});
