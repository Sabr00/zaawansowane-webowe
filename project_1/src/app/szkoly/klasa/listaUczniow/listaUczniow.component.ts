import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'klasa-lista-uczniow',
  imports: [CommonModule],
  templateUrl: './listaUczniow.component.html',
  styleUrl: './listaUczniow.component.less'
})
export class ListaUczniowComponent {
	@Input() klasa: any;
}
