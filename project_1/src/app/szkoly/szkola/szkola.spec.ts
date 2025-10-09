import { Szkola } from './szkola';

describe('Szkola', () => {
  it('should create an instance', () => {
    expect(new Szkola(1, 'nazwa', 'adres', 'Krolowa', 'Jadwiga')).toBeTruthy();
  });
});
