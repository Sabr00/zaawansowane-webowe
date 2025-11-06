import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import  SzkolaModule  from '../../szkoly-module';

@Component({
	selector: 'szkoly-lista',
	imports: [CommonModule, SzkolaModule],
	templateUrl: './lista.component.html',
	styleUrl: './lista.component.less',
})
export class ListaComponent {
	@Input() szkolyModule!: SzkolaModule;
	@Output() szkolaSelected = new EventEmitter<any>();

  	get szkoly() {
    	return this.szkolyModule.wypiszSzkoly();
	}

	dodajSzkole() {
		const nazwa = prompt('Podaj nazwę szkoły:');
		const adres = prompt('Podaj adres szkoły:');
		const imieDyrektora = prompt('Podaj imię dyrektora:');
		const nazwiskoDyrektora = prompt('Podaj nazwisko dyrektora:');
		if (nazwa && adres && imieDyrektora && nazwiskoDyrektora) {
			this.szkolyModule.dodajSzkole(nazwa, adres, imieDyrektora, nazwiskoDyrektora);
		} else {
			alert('Nie podano wszystkich danych. Szkoła nie została dodana.');
		}
  	}

	rozwinSzkole(szkola: any) {
		szkola.showDetails = true;
	}
	zwinSzkole(szkola: any) {
		szkola.showDetails = false;
	}
	pokazSzkole(szkola: any) {
		this.szkolaSelected.emit(szkola);
		szkola.aktywnyModul = 'szkola';
	}
	pokazNauczycieli(szkola: any) {
		this.szkolaSelected.emit(szkola);
		szkola.aktywnyModul = 'nauczyciele';
	}
	pokazPrzedmioty(szkola: any) {
		this.szkolaSelected.emit(szkola);
		szkola.aktywnyModul = 'przedmioty';
	}
	pokazKlasy(szkola: any) {
		this.szkolaSelected.emit(szkola);
		szkola.aktywnyModul = 'klasy';
	}
	pokazSale(szkola: any) {
		this.szkolaSelected.emit(szkola);
		szkola.aktywnyModul = 'sale';
	}
	pokazUczniow(szkola: any) {
		this.szkolaSelected.emit(szkola);
		szkola.aktywnyModul = 'uczniowie';
	}
}
