import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CursosComponent } from './cursos/cursos.component';
import { ProfessoresComponent } from './professores/professores.component';
import { TituloComponent } from './titulo/titulo.component';
import { RodapeComponent } from './rodape/rodape.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CursosComponent,
    ProfessoresComponent,
    TituloComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
