export class Lekcja {
	private id: number;
	private idPrzedmiotu: number;
	private idNauczyciela: number;
	private idKlasy: number;
	private idSali: number;
	private data: string;

	constructor(id: number, idPrzedmiotu: number, idNauczyciela: number, idKlasy: number, idSali: number, data: string) {
		this.id = id;
		this.idPrzedmiotu = idPrzedmiotu;
		this.idNauczyciela = idNauczyciela;
		this.idKlasy = idKlasy;
		this.idSali = idSali;
		this.data = data;
	}
	getId(): number {
		return this.id;
	}
	setPrzedmiot(idPrzedmiotu: number) {
		this.idPrzedmiotu = idPrzedmiotu;
	}
	getPrzedmiot(): number {
		return this.idPrzedmiotu;
	}
	setNauczyciel(idNauczyciela: number) {
		this.idNauczyciela = idNauczyciela;
	}
	getNauczyciel(): number {
		return this.idNauczyciela;
	}
	setKlasa(idKlasy: number) {
		this.idKlasy = idKlasy;
	}
	getKlasa(): number {
		return this.idKlasy;
	}
	setSala(idSali: number) {
		this.idSali = idSali;
	}
	getSala(): number {
		return this.idSali;
	}
	setData(data: string) {
		this.data = data;
	}
	getData(): string {
		return this.data;
	}
}
