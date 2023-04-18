import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { VorstandComponent } from './vorstand/vorstand.component';
import { BouleComponent } from './boule/boule.component';
import { DamengymnastikComponent } from './damengymnastik/damengymnastik.component';
import { FussballHerrenComponent } from './fussball-herren/fussball-herren.component';
import { FussballJugendComponent } from './fussball-jugend/fussball-jugend.component';
import { HerrenAktivComponent } from './herren-aktiv/herren-aktiv.component';
import { MutterKindTurnenComponent } from './mutter-kind-turnen/mutter-kind-turnen.component';
import { SaunaDamenComponent } from './sauna-damen/sauna-damen.component';
import { SaunaHerrenComponent } from './sauna-herren/sauna-herren.component';
import { YogaComponent } from './yoga/yoga.component';

const routes: Routes = [
  {path:'', component:InfoComponent },
  {path:'vorstand', component: VorstandComponent},
  {path:'boule', component: BouleComponent},
  {path:'damengymnastik', component: DamengymnastikComponent},
  {path:'fussball-herren', component: FussballHerrenComponent},
  {path:'fussball-jugend', component: FussballJugendComponent},
  {path:'herren-aktiv', component: HerrenAktivComponent},
  {path:'mutter-kind-turnen', component: MutterKindTurnenComponent},
  {path:'sauna-damen', component: SaunaDamenComponent},
  {path:'sauna-herren', component: SaunaHerrenComponent},
  {path:'yoga', component: YogaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
