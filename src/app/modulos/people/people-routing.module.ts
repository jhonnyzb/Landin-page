import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleAllComponent } from './people-all/people-all.component';

const routes: Routes = [
  {
    path: 'peopleall', component: PeopleAllComponent
  },
  {
    path: '',
    redirectTo: 'peopleall',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }
