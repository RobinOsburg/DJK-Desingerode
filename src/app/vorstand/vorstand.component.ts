import { Component } from '@angular/core';

@Component({
  selector: 'app-vorstand',
  templateUrl: './vorstand.component.html',
  styleUrls: ['./vorstand.component.scss']
})
export class VorstandComponent {

  spartenExpanded: boolean = false;


  toggleSparten() {
    this.spartenExpanded = !this.spartenExpanded;
  }

}
