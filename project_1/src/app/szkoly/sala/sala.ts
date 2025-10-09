export class Sala {
	private id: number;
	private nazwa: string;
	private typ: TYP_SALI;
	private iloscMiejsc: number;
	private idOpiekuna: number; // idNauczyciela
	private tablica: TYP_TABLICY[];
	public showDetails: boolean = false;
	
	constructor(id: number, nazwa: string, iloscMiejsc: number, typ: TYP_SALI, idOpiekuna: number, tablica: TYP_TABLICY[] = []) {
		this.id = id;
		this.nazwa = nazwa;
		this.typ = typ;
		this.iloscMiejsc = iloscMiejsc;
		this.idOpiekuna = idOpiekuna;
		this.tablica = tablica;
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
	setTyp(typ: TYP_SALI) {
		this.typ = typ;
	}
	getTyp(): TYP_SALI {
		return this.typ;
	}
	setIloscMiejsc(iloscMiejsc: number) {
		this.iloscMiejsc = iloscMiejsc;
	}
	getIloscMiejsc(): number {
		return this.iloscMiejsc;
	}
	setOpiekun(idOpiekuna: number) {
		this.idOpiekuna = idOpiekuna;
	}
	getOpiekun(): number {
		return this.idOpiekuna;
	}
	dodajTablice(tablica: TYP_TABLICY) {
		this.tablica.push(tablica);
	}
	getTablice(): TYP_TABLICY[] {
		return this.tablica;
	}
	usunTablice(tablica: TYP_TABLICY) {
		const index = this.tablica.indexOf(tablica);
		if (index > -1) {
			this.tablica.splice(index, 1);
		}
	}
}

export enum TYP_TABLICY {
	ZWYKLA = 'zwykla',
	INTERAKTYWNA = 'interaktywna',
	RZUTNIK = 'rzutnik',
}

export enum TYP_SALI {
	ZWYKLA = 'Zwykła',
	GRAFICZNA = 'Graficzna',
	PROGRAMISTYCZNA = 'Programistyczna',
	KOMPUTEROWA = 'Komputerowa',
	LABORATORYJNA = 'Laboratoryjna',
	CHEMICZNA = 'Chemiczna',
	BIOLOGICZNA = 'Biologiczna',
	SPORTOWA = 'Sportowa',
	MUZYCZNA = 'Muzyczna',
	FIZYCZNA = 'Fizyczna',
	GEOGRAFICZNA = 'Geograficzna',
	EKOLOGICZNA = 'Ekologiczna',
	TECHNICZNA = 'Techniczna',
	PLASTYCZNA = 'Plastyczna',
}
