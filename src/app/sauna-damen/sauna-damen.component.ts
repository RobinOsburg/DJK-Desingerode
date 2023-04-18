import { Component } from '@angular/core';

@Component({
  selector: 'app-sauna-damen',
  templateUrl: './sauna-damen.component.html',
  styleUrls: ['./sauna-damen.component.scss']
})
export class SaunaDamenComponent {


  spartenExpanded: boolean = false;


  toggleSparten() {
    this.spartenExpanded = !this.spartenExpanded;
  }
}
