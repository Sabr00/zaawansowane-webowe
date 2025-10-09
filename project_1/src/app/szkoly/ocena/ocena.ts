export class Ocena {
	private id: number;
	private idPrzemiotu: number;
	private idNauczyciela: number;
	private wartosc: number;
	private opis: string;
	private data: string;

	constructor(id: number, idPrzemiotu: number, idNauczyciela: number, wartosc: number, opis: string, data: string) {
		this.id = id;
		this.idPrzemiotu = idPrzemiotu;
		this.idNauczyciela = idNauczyciela;
		this.wartosc = wartosc;
		this.data = data;
		this.opis = opis;
	}
	getId(): number {
		return this.id;
	}
	getPrzedmiot(): number {
		return this.idPrzemiotu;
	}
	getNauczyciel(): number {
		return this.idNauczyciela;
	}
	getWartosc(): number {
		return this.wartosc;
	}
	getData(): string {
		return this.data;
	}
	getOpis(): string {
		return this.opis;
	}
}
