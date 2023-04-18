import { Component } from '@angular/core';

@Component({
  selector: 'app-yoga',
  templateUrl: './yoga.component.html',
  styleUrls: ['./yoga.component.scss']
})
export class YogaComponent {


  spartenExpanded: boolean = false;


  toggleSparten() {
    this.spartenExpanded = !this.spartenExpanded;
  }
}
