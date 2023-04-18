import { Component } from '@angular/core';

@Component({
  selector: 'app-herren-aktiv',
  templateUrl: './herren-aktiv.component.html',
  styleUrls: ['./herren-aktiv.component.scss']
})
export class HerrenAktivComponent {


  spartenExpanded: boolean = false;


  toggleSparten() {
    this.spartenExpanded = !this.spartenExpanded;
  }
}
