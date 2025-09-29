import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-nowy',
  imports: [],
  templateUrl: './nowy.component.html',
  styleUrl: './nowy.component.less'
})
export class NowyComponent {  
  count : number = 2;
  title = signal("nauka");
  changeTitle = () => {
    this.title.set(this.title().replace(/ \d+/, '') + ' ' + this.count.toString());
    this.count++;
  };

  tekstButtona = "kliknij mnie!";
  showMessage = () => {
    alert("Zostalem klikniety")}
}
