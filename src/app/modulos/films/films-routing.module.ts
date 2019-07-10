import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmsAllComponent } from './films-all/films-all.component';

const routes: Routes = [
  {
    path: 'films', component: FilmsAllComponent
  },
  {
    path: '',
    redirectTo: 'films',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmsRoutingModule { }
