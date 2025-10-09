import { Lekcja } from './lekcja';

describe('Lekcja', () => {
  it('should create an instance', () => {
    expect(new Lekcja(1, 1, 1, 1, 1, '2025-01-01 12:12')).toBeTruthy();
  });
});
