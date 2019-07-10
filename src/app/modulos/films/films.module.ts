import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmsRoutingModule } from './films-routing.module';
import { FilmsAllComponent } from './films-all/films-all.component';

@NgModule({
  declarations: [FilmsAllComponent],
  imports: [
    CommonModule,
    FilmsRoutingModule
  ]
})
export class FilmsModule { }
