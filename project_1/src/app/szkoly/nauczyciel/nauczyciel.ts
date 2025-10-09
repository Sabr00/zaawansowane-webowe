export class Nauczyciel {
	private id: number;
	private imie: string;
	private nazwisko: string;
	private nrTel: string = '';
	private email: string = '';
	public showDetails: boolean = false;
	
	constructor(id: number, imie: string, nazwisko: string) {
		this.id = id;
		this.imie = imie;
		this.nazwisko = nazwisko;
	}
	getId(): number {
		return this.id;
	}
	setImie(imie: string) {
		this.imie = imie;
	}
	getImie(): string {
		return this.imie;
	}
	setNazwisko(nazwisko: string) {
		this.nazwisko = nazwisko;
	}
	getNazwisko(): string {
		return this.nazwisko;
	}
	setNrTel(nrTel: string) {
		this.nrTel = nrTel;
	}
	getNrTel(): string {
		return this.nrTel;
	}
	setEmail(email: string) {
		this.email = email;
	}
	getEmail(): string {
		return this.email;
	}
}
