import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { InfoComponent } from './info/info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { VorstandComponent } from './vorstand/vorstand.component';
import { MainsideComponent } from './mainside/mainside.component';
import { BouleComponent } from './boule/boule.component';
import { DamengymnastikComponent } from './damengymnastik/damengymnastik.component';
import { FussballHerrenComponent } from './fussball-herren/fussball-herren.component';
import { FussballJugendComponent } from './fussball-jugend/fussball-jugend.component';
import { HerrenAktivComponent } from './herren-aktiv/herren-aktiv.component';
import { MutterKindTurnenComponent } from './mutter-kind-turnen/mutter-kind-turnen.component';
import { SaunaDamenComponent } from './sauna-damen/sauna-damen.component';
import { SaunaHerrenComponent } from './sauna-herren/sauna-herren.component';
import { YogaComponent } from './yoga/yoga.component';






@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    InfoComponent,
    VorstandComponent,
    MainsideComponent,
    BouleComponent,
    DamengymnastikComponent,
    FussballHerrenComponent,
    FussballJugendComponent,
    HerrenAktivComponent,
    MutterKindTurnenComponent,
    SaunaDamenComponent,
    SaunaHerrenComponent,
    YogaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
