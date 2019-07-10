import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanetasRoutingModule } from './planetas-routing.module';
import { PlanetasAllComponent } from './planetas-all/planetas-all.component';

@NgModule({
  declarations: [PlanetasAllComponent],
  imports: [
    CommonModule,
    PlanetasRoutingModule
  ]
})
export class PlanetasModule { }
