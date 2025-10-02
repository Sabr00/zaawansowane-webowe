export class Szkola {
    private nazwa: string = "ZS1";
    private adres: string = "ul. Szpitalna 10, 05-500 Piaseczno";
    constructor(nazwa: string, adres: string) {
        this.nazwa = nazwa;
        this.adres = adres;
    }
    getNazwa(): string {
        return this.nazwa;
    }
    getAdres(): string {
        return this.adres;
    }
    setNazwa(nazwa: string) {
        this.nazwa = nazwa;
    }
    setAdres(adres: string) {
        this.adres = adres;
    }
}
