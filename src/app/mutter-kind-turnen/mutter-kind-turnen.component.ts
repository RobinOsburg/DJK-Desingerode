import { Component } from '@angular/core';

@Component({
  selector: 'app-mutter-kind-turnen',
  templateUrl: './mutter-kind-turnen.component.html',
  styleUrls: ['./mutter-kind-turnen.component.scss']
})
export class MutterKindTurnenComponent {


  spartenExpanded: boolean = false;


  toggleSparten() {
    this.spartenExpanded = !this.spartenExpanded;
  }
}
