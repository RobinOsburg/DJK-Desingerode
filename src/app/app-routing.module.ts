import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { VorstandComponent } from './vorstand/vorstand.component';

const routes: Routes = [
  {path:'', component:InfoComponent },
  {path:'vorstand', component: VorstandComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
