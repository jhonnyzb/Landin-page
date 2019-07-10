import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: 'index' , component: LayoutComponent,
    children: [
      {
        path: 'people',
        loadChildren: './modulos/people/people.module#PeopleModule'
      },
      {
        path: 'planets',
        loadChildren: './modulos/planetas/planetas.module#PlanetasModule'
      },
      {
        path: 'species',
        loadChildren: './modulos/species/species.module#SpeciesModule'
      },
      {
        path: 'films',
        loadChildren: './modulos/films/films.module#FilmsModule'
      },
      {
        path: 'vehiculos',
        loadChildren: './modulos/vehiculos/vehiculos.module#VehiculosModule'
      },
      {
        path: 'starchips',
        loadChildren: './modulos/starchips/starchips.module#StarchipsModule'
      },
      {
        path: '',
        redirectTo: 'people',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
