import { ShowIfLoggedDirective } from './show-if-logged.directive';

describe('ShowIfLoggedDirective', () => {
  it('should create an instance', () => {
    const directive = new ShowIfLoggedDirective(null, null, null);
    expect(directive).toBeTruthy();
  });
});
