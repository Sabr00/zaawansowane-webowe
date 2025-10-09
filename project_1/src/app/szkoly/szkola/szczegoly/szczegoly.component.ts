import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent as ListaNauczycieli } from '../../nauczyciel/lista/lista.component';
import { ListaComponent as ListaPrzedmiotow } from '../../przedmiot/lista/lista.component';
import { ListaComponent as ListaKlas } from '../../klasa/lista/lista.component';
import { ListaComponent as ListaSal } from '../../sala/lista/lista.component';
import { ListaComponent as ListaUczniow } from '../../uczen/lista/lista.component';

@Component({
	selector: 'szkola-szczegoly',
	imports: [CommonModule, ListaNauczycieli, ListaPrzedmiotow, ListaKlas, ListaSal, ListaUczniow],
	templateUrl: './szczegoly.component.html',
	styleUrl: './szczegoly.component.less'
})
export class SzczegolyComponent {
	@Input() szkola: any;
}
