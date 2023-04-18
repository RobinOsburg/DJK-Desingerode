import { Component } from '@angular/core';

@Component({
  selector: 'app-sauna-herren',
  templateUrl: './sauna-herren.component.html',
  styleUrls: ['./sauna-herren.component.scss']
})
export class SaunaHerrenComponent {


  spartenExpanded: boolean = false;


  toggleSparten() {
    this.spartenExpanded = !this.spartenExpanded;
  }
}
