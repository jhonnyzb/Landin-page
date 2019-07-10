import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpeciesAllComponent } from './species-all/species-all.component';

const routes: Routes = [
  {
    path: 'species', component: SpeciesAllComponent
  },
  {
    path: '',
    redirectTo: 'species',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpeciesRoutingModule { }
