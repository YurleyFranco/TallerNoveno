import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarraComponent } from './componente/barra/barra.component';
import { CalculadoraComponent } from './componente/calculadora/calculadora.component';
import { FormularioDonacionesComponent } from './componente/formulario-donaciones/formulario-donaciones.component';
import { InformacionComponent } from './componente/informacion/informacion.component';
import { FooterComponent } from './componente/footer/footer.component';


import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    BarraComponent,
    CalculadoraComponent,
    FormularioDonacionesComponent,
    InformacionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
