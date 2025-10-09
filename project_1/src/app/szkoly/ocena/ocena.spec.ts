import { Ocena } from './ocena';

describe('Ocena', () => {
  it('should create an instance', () => {
    expect(new Ocena(1, 1, 1, 4, 'praca na lekcji', '2025-01-01 12:12')).toBeTruthy();
  });
});
