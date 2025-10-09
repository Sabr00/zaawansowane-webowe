import { Nauczyciel } from './nauczyciel';

describe('Nauczyciel', () => {
  it('should create an instance', () => {
    expect(new Nauczyciel(1, 'imie', 'nazwisko')).toBeTruthy();
  });
});
