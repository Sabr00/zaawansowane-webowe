export enum PROFIL_KLASY {
	OGOLNOKSZTALCACA = 'Ogólnokształcąca',
	TECHNICZNA = 'Techniczna',
	BRANZOWA = 'Branżowa',
	LICEALNA = 'Licealna',
	SPORTOWA = 'Sportowa',
	MUZYCZNA = 'Muzyczna',
	PLASTYCZNA = 'Plastyczna',
	JEZYKOWA = 'Językowa',
	PROGRAMISTYCZNA = 'Programistyczna',
	MEDYCZNA = 'Medyczna',
	PRAWNICZA = 'Prawnicza',
	BIZNESOWA = 'Biznesowa',
	EKOLOGICZNA = 'Ekologiczna',
}

export class Klasa {
	private id: number;
	private nazwa: string;
	private profil: PROFIL_KLASY;
	private idWychowawcy: number;
	private iloscUczniow: number = 0;
	private listaUczniow: number[] = [];
	public showDetails: boolean = false;
	
	constructor(id: number, nazwa: string, profil: PROFIL_KLASY, wychowawca: number) {
		this.id = id;
		this.nazwa = nazwa;
		this.profil = profil;
		this.idWychowawcy = wychowawca;
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
	setProfil(profil: PROFIL_KLASY) {
		this.profil = profil;
	}
	getProfil(): PROFIL_KLASY {
		return this.profil;
	}
	setWychowawca(idWychowawcy: number) {
		this.idWychowawcy = idWychowawcy;
	}
	getWychowawca(): number {
		return this.idWychowawcy;
	}
	dodajUcznia(idUcznia: number) {
		this.listaUczniow.push(idUcznia);
		this.iloscUczniow++;
	}
	usunUcznia(id: number) {
		const index = this.listaUczniow.indexOf(id);
		if (index > -1) {
			this.listaUczniow.splice(index, 1);
			this.iloscUczniow--;
		}
	}
	getUczniow(): number[] {
		return this.listaUczniow;
	}
	getIloscUczniow(): number {
		return this.iloscUczniow;
	}
}
