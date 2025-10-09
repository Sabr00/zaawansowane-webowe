export class Przedmiot {
	private id: number;
	private nazwa: string;
	private iloscGodzin: number;
	public showDetails: boolean = false;

	constructor(id: number, nazwa: string, iloscGodzin: number) {
		this.id = id;
		this.nazwa = nazwa;
		this.iloscGodzin = iloscGodzin;
	}
	getId(): number {
		return this.id;
	}
	setNazwa(nazwa: string) {
		this.nazwa = nazwa;
	}
	getNazwa(): string {
		return this.nazwa;
	}
	setIloscGodzin(iloscGodzin: number) {
		this.iloscGodzin = iloscGodzin;
	}
	getIloscGodzin(): number {
		return this.iloscGodzin;
	}
}
