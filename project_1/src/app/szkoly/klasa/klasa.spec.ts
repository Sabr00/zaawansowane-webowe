import { Klasa, PROFIL_KLASY } from './klasa';

describe('Klasa', () => {
	it('should create an instance', () => {
		expect(new Klasa(1, 'nazwa', PROFIL_KLASY.PROGRAMISTYCZNA, 20)).toBeTruthy();
	});
});
