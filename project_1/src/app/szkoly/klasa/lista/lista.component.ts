import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SzczegolyComponent as SzczegolyKlasy } from '../../klasa/szczegoly/szczegoly.component';

@Component({
  selector: 'klasy-lista',
  imports: [CommonModule, SzczegolyKlasy],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.less'
})
export class ListaComponent {
	@Input() szkola: any;
	toggleSzczegolyKlasy(klasa: any) {
		klasa.showDetails = !klasa.showDetails;
	}
}
