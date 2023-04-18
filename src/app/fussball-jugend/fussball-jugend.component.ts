import { Component } from '@angular/core';

@Component({
  selector: 'app-fussball-jugend',
  templateUrl: './fussball-jugend.component.html',
  styleUrls: ['./fussball-jugend.component.scss']
})
export class FussballJugendComponent {


  spartenExpanded: boolean = false;


  toggleSparten() {
    this.spartenExpanded = !this.spartenExpanded;
  }
}
