import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './componente/calculadora/calculadora.component';
import { FormularioDonacionesComponent } from './componente/formulario-donaciones/formulario-donaciones.component';
import { InformacionComponent } from './componente/informacion/informacion.component'; 

const routes: Routes = [
  {path: '', redirectTo: '/informacion', pathMatch: 'full'},
  {path:'calculadora', component: CalculadoraComponent},
  {path:'formulario-donaciones', component: FormularioDonacionesComponent},
  {path:'informacion', component: InformacionComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
