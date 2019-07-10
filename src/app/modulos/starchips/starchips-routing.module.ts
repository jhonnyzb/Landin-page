import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StarchipsAllComponent } from './starchips-all/starchips-all.component';

const routes: Routes = [
  {
    path: 'Starchips', component: StarchipsAllComponent
  },
  {
    path: '',
    redirectTo: 'Starchips',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarchipsRoutingModule { }
