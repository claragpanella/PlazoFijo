import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearPlazoFijoComponent } from './components/crear-plazo-fijo/crear-plazo-fijo.component';
import { PlazoFijoComponent } from './components/plazo-fijo/plazo-fijo.component';

const routes: Routes = [
  {path:'crear-plazo-fijo', component:CrearPlazoFijoComponent},
  {path:'crear-plazo-fijo/:id', component:CrearPlazoFijoComponent},
  {path:'simular', component:PlazoFijoComponent},
  {path:'', component:PlazoFijoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
