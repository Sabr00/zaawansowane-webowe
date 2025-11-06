import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaUczniowComponent } from '../listaUczniow/listaUczniow.component';

@Component({
  selector: 'klasa-szczegoly',
  imports: [CommonModule, ListaUczniowComponent],
  templateUrl: './szczegoly.component.html',
  styleUrl: './szczegoly.component.less'
})
export class SzczegolyComponent {
	@Input() szkola: any;
	@Input() klasa: any;
}
