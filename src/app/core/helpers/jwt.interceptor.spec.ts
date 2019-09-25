import { JwtInterceptor } from 'src/app/core/helpers/jwt.interceptor';

describe('JwtInterceptor', () => {
  it('should create an instance', () => {
    expect(new JwtInterceptor()).toBeTruthy();
  });
});
