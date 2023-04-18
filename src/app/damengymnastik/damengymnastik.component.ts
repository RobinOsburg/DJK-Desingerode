import { Component } from '@angular/core';

@Component({
  selector: 'app-damengymnastik',
  templateUrl: './damengymnastik.component.html',
  styleUrls: ['./damengymnastik.component.scss']
})
export class DamengymnastikComponent {



  spartenExpanded: boolean = false;


  toggleSparten() {
    this.spartenExpanded = !this.spartenExpanded;
  }
}
