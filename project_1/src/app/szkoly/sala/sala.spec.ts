import { Sala, TYP_SALI, TYP_TABLICY } from './sala';

describe('Sala', () => {
  it('should create an instance', () => {
    expect(new Sala(1, '125', 15, TYP_SALI.KOMPUTEROWA, 10, [TYP_TABLICY.ZWYKLA])).toBeTruthy();
  });
});
