import { Przedmiot } from './przedmiot';

describe('Przedmiot', () => {
  it('should create an instance', () => {
    expect(new Przedmiot(123, 'angular', 2)).toBeTruthy();
  });
});
