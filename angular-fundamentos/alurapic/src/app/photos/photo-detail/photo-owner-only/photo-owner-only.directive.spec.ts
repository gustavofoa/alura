import { PhotoOwnerOnlyDirective } from './photo-owner-only.directive';

describe('PhotoOwnerOnlyDirective', () => {
  it('should create an instance', () => {
    const directive = new PhotoOwnerOnlyDirective(null, null, null);
    expect(directive).toBeTruthy();
  });
});
