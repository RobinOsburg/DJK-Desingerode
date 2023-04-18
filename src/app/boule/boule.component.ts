import { Component } from '@angular/core';

@Component({
  selector: 'app-boule',
  templateUrl: './boule.component.html',
  styleUrls: ['./boule.component.scss']
})
export class BouleComponent {


  spartenExpanded: boolean = false;


  toggleSparten() {
    this.spartenExpanded = !this.spartenExpanded;
  }
}
