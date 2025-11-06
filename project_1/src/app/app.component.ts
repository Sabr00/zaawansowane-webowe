import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import  SzkolyModule  from './szkoly/szkoly-module';
import { ListaComponent as ListaSzkol } from './szkoly/szkola/lista/lista.component';
import { SzczegolyComponent as SzczegolySzkoly } from './szkoly/szkola/szczegoly/szczegoly.component';
import { PROFIL_KLASY } from './szkoly/klasa/klasa';
// import ButtonComponent from './button/button.component';
import { TYP_SALI, TYP_TABLICY } from './szkoly/sala/sala'; // Adjust the import path as needed

var klasa: any, szkolyModule = new SzkolyModule();
var szkola = szkolyModule.dodajSzkole('ZS 1', 'ul. Szkolna 1, 00-001 Warszawa', 'Dyrektor', 'Pierwszy')
	.setTelefon('123-456-789')
	.setEmail('email@szkola1.pl')
	.setWww('https://szkola1.pl');
szkola.dodajNauczyciela('Nauczyciel', 'Drugi');
szkola.dodajNauczyciela('Nauczyciel', 'Trzeci');
szkola.dodajPrzedmiot('Node', 2);
szkola.dodajPrzedmiot('Angular', 2);
szkola.dodajPrzedmiot('PHP', 2);
szkola.dodajSale('101', 20, TYP_SALI.BIOLOGICZNA, 1, [ TYP_TABLICY.ZWYKLA ]);
szkola.dodajSale('102', 20, TYP_SALI.CHEMICZNA, 2, [ TYP_TABLICY.INTERAKTYWNA ]);
szkola.dodajSale('103', 20, TYP_SALI.FIZYCZNA, 3, [ TYP_TABLICY.ZWYKLA, TYP_TABLICY.INTERAKTYWNA ]);
klasa = szkola.dodajKlase('1A', PROFIL_KLASY.BIZNESOWA, 0);
klasa = szkola.getKlase(klasa);
klasa.dodajUcznia(szkola.dodajUcznia('Uczen', 'Pierwszy'));
klasa.dodajUcznia(szkola.dodajUcznia('Uczen', 'Drugi'));
klasa.dodajUcznia(szkola.dodajUcznia('Uczen', 'Trzeci'));
szkola.dodajKlase('1B', PROFIL_KLASY.BRANZOWA, 0);
szkola.dodajKlase('1C', PROFIL_KLASY.EKOLOGICZNA, 0);

szkola = szkolyModule.dodajSzkole('SP 2', 'ul. druga 2, 00-002 Warszawa', 'Drugi', 'Dyrektor')
	.setTelefon('123-456-789')
	.setEmail('email@szkola2.pl')
	.setWww('https://szkola2.pl');
szkola.dodajNauczyciela('Nauczyciel', 'Czwarty');
szkola.dodajNauczyciela('Nauczyciel', 'Piąty');
szkola.dodajPrzedmiot('Matematyka', 2);
szkola.dodajPrzedmiot('Geografia', 2);
szkola.dodajPrzedmiot('Polski', 2);
klasa = szkola.dodajKlase('2A', PROFIL_KLASY.JEZYKOWA, 0);
klasa = szkola.getKlase(klasa);
klasa.dodajUcznia(szkola.dodajUcznia('Uczen', 'Czwarty'));
klasa.dodajUcznia(szkola.dodajUcznia('Uczen', 'Piąty'));
klasa.dodajUcznia(szkola.dodajUcznia('Uczen', 'Szósty'));
szkola.dodajKlase('2B', PROFIL_KLASY.LICEALNA, 0);
szkola.dodajKlase('2C', PROFIL_KLASY.MEDYCZNA, 0);
szkola.dodajSale('201', 20, TYP_SALI.LABORATORYJNA, 1, [ TYP_TABLICY.ZWYKLA ]);
szkola.dodajSale('202', 20, TYP_SALI.KOMPUTEROWA, 2, [ TYP_TABLICY.INTERAKTYWNA ]);
szkola.dodajSale('203', 20, TYP_SALI.MUZYCZNA, 3, [ TYP_TABLICY.ZWYKLA, TYP_TABLICY.INTERAKTYWNA ]);

@Component({
	selector: 'app-root', // <app-root/>
	imports: [RouterOutlet, FormsModule, SzkolyModule, ListaSzkol, SzczegolySzkoly],
	templateUrl: './app.component.html',
	styleUrl: './app.component.less'
})

export class AppComponent {
	title = 'nowy projekt';
	szkoly = szkolyModule;
	selectedSzkola: any = null;

	onSzkolaSelected(szkola: any) {
		this.selectedSzkola = szkola;
	}
}
