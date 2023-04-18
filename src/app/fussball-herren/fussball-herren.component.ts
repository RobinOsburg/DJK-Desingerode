import { Component } from '@angular/core';

@Component({
  selector: 'app-fussball-herren',
  templateUrl: './fussball-herren.component.html',
  styleUrls: ['./fussball-herren.component.scss']
})
export class FussballHerrenComponent {



  spartenExpanded: boolean = false;


  toggleSparten() {
    this.spartenExpanded = !this.spartenExpanded;
  }
}
