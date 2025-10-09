import { Klasa, PROFIL_KLASY } from "../klasa/klasa";
import { Lekcja } from "../lekcja/lekcja";
import { Nauczyciel } from "../nauczyciel/nauczyciel";
import { Ocena } from "../ocena/ocena";
import { Przedmiot } from "../przedmiot/przedmiot";
import { Sala, TYP_SALI, TYP_TABLICY } from "../sala/sala";
import { Uczen } from "../uczen/uczen";

export class Szkola {
	private id: number;
	private nazwa: string;
	private adres: string;
	private dyrektor: number; // id nauczyciela
	private telefon: string = '';
	private email: string = '';
	private www: string = '';
	private klasy: Klasa[] = []; // id klas
	private lekcje: Lekcja[] = []; // id lekcji
	private nauczyciele: Nauczyciel[] = []; // id nauczycieli
	private oceny: Ocena[] = []; // id ocen
	private przedmioty: Przedmiot[] = []; // id przedmiotów
	private sale: Sala[] = []; // id sal
	private uczniowie: Uczen[] = []; // id uczniów
	public showDetails: boolean = false;

	constructor(id: number, nazwa: string, adres: string, imieDyrektora: string, nazwiskoDyrektora: string) {
		this.id = id;
		this.nazwa = nazwa;
		this.adres = adres;
		this.dyrektor = this.dodajNauczyciela(imieDyrektora, nazwiskoDyrektora);
	}
	getId(): number {
		return this.id;
	}
	setNazwa(nazwa: string) {
		this.nazwa = nazwa;
		return this;
	}
	getNazwa(): string {
		return this.nazwa;
	}
	setAdres(adres: string) {
		this.adres = adres;
		return this;
	}
	getAdres(): string {
		return this.adres;
	}
	getAdresOdwrocony(): string {
		return this.adres.replace(/^(.+), (\d{2}-\d{3}.+)$/, '$2, $1');
	}
	setDyrektor(dyrektor: number) {
		this.dyrektor = dyrektor;
		return this;
	}
	getDyrektor(): Nauczyciel {
		return this.nauczyciele[this.dyrektor];
	}
	setTelefon(telefon: string) {
		this.telefon = telefon;
		return this;
	}
	getTelefon(): string {
		return this.telefon;
	}
	setEmail(email: string) {
		this.email = email;
		return this;
	}
	getEmail(): string {
		return this.email;
	}
	setWww(www: string) {
		this.www = www;
		return this;
	}
	getWww(): string {
		return this.www;
	}
	dodajKlase(nazwa: string, profil: PROFIL_KLASY, wychowawca: number): number {
		var id = this.klasy.length;
		this.klasy.push(new Klasa(id, nazwa, profil, wychowawca));
		return id;
	}
	getKlasy(): Klasa[] {
		return this.klasy;
	}
	usunKlase(klasaId: number) {
		this.klasy = this.klasy.filter((klasa) => klasa.getId() !== klasaId);
	}
	dodajLekcje(idPrzedmiotu: number, idNauczyciela: number, idKlasy: number, idSali: number, data: string): number {
		var id = this.lekcje.length;
		this.lekcje.push(new Lekcja(id, idPrzedmiotu, idNauczyciela, idKlasy, idSali, data));
		return id;
	}
	getLekcje(): Lekcja[] {
		return this.lekcje;
	}
	usunLekcje(lekcjaId: number) {
		this.lekcje = this.lekcje.filter((lekcja) => lekcja.getId() !== lekcjaId);
	}
	dodajNauczyciela(imie: string, nazwisko: string): number {
		var id = this.nauczyciele.length + 1;
		this.nauczyciele.push(new Nauczyciel(id, imie, nazwisko));
		return id;
	}
	getNauczyciela(id: number): Nauczyciel {
		return this.nauczyciele.find(n => n.getId() === id)!;
	}
	getNauczyciele(): Nauczyciel[] {
		return this.nauczyciele;
	}
	usunNauczyciela(nauczycielId: number) {
		this.nauczyciele = this.nauczyciele.filter((nauczyciel) => nauczyciel.getId() !== nauczycielId);
	}
	dodajOcene(idPrzedmiotu: number, idNauczyciela: number, wartosc: number, opis: string, data: string): number {
		var id = this.oceny.length;
		this.oceny.push(new Ocena(id, idPrzedmiotu, idNauczyciela, wartosc, opis, data));
		return id;
	}
	getOceny(): Ocena[] {
		return this.oceny;
	}
	usunOcene(ocenaId: number) {
		this.oceny = this.oceny.filter((ocena) => ocena.getId() !== ocenaId);
	}
	dodajPrzedmiot(nazwa: string, iloscGodzin: number): number {
		var id = this.przedmioty.length + 1;
		this.przedmioty.push(new Przedmiot(id, nazwa, iloscGodzin));
		return id;
	}
	getPrzedmioty(): Przedmiot[] {
		return this.przedmioty;
	}
	usunPrzedmiot(przedmiotId: number) {
		this.przedmioty = this.przedmioty.filter((przedmiot) => przedmiot.getId() !== przedmiotId);
	}
	dodajSale(nazwa: string, iloscMiejsc: number, typ: TYP_SALI, idOpiekuna: number, tablica: TYP_TABLICY[] = []): number {
		var id = this.sale.length;
		this.sale.push(new Sala(id, nazwa, iloscMiejsc, typ, idOpiekuna, tablica));
		return id;
	}
	getSale(): Sala[] {
		return this.sale;
	}
	usunSale(salaId: number) {
		this.sale = this.sale.filter((sala) => sala.getId() !== salaId);
	}
	dodajUcznia(imie: string, nazwisko: string): number {
		var id = this.uczniowie.length + 1;
		this.uczniowie.push(new Uczen(id, imie, nazwisko));
		return id;
	}
	getUczniow(): Uczen[] {
		return this.uczniowie;
	}
	usunUcznia(uczenId: number) {
		this.uczniowie = this.uczniowie.filter((uczen) => uczen.getId() !== uczenId);
	}
}
