import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehiculosAllComponent } from './vehiculos-all/vehiculos-all.component';

const routes: Routes = [
  {
    path: 'Vehiculos', component: VehiculosAllComponent
  },
  {
    path: '',
    redirectTo: 'Vehiculos',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiculosRoutingModule { }
