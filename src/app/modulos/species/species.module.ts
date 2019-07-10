import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpeciesRoutingModule } from './species-routing.module';
import { SpeciesAllComponent } from './species-all/species-all.component';

@NgModule({
  declarations: [SpeciesAllComponent],
  imports: [
    CommonModule,
    SpeciesRoutingModule
  ]
})
export class SpeciesModule { }
