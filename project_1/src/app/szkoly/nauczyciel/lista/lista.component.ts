import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SzczegolyComponent as SzczegolyNauczycieli} from '../szczegoly/szczegoly.component';


@Component({
  selector: 'nauczyciele-lista',
  imports: [CommonModule, SzczegolyNauczycieli],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.less'
})

export class ListaComponent {
  @Input() szkola: any;
  toggleSzczegolyNauczycieli(nauczyciel: any) {
    nauczyciel.showDetails = !nauczyciel.showDetails;
  }
}
