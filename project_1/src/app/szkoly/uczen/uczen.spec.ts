import { Uczen } from './uczen';

describe('Uczen', () => {
  it('should create an instance', () => {
    expect(new Uczen(1, 'imie', 'nazwisko')).toBeTruthy();
  });
});
