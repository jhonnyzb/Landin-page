import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanetasAllComponent } from './planetas-all/planetas-all.component';

const routes: Routes = [
  {
    path: 'planetas', component:PlanetasAllComponent
  },
  {
    path: '',
    redirectTo: 'planetas',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanetasRoutingModule { }
