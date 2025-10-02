import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NowyComponent } from './nowy/nowy.component';

@Component({
  selector: 'app-root',
  imports: [NowyComponent],
  styleUrl: './app.component.less',
  template: '<main> <app-nowy /> </main> ',
})

export class AppComponent {
  title = 'homes';
}
