import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiculosRoutingModule } from './vehiculos-routing.module';
import { VehiculosAllComponent }  from './vehiculos-all/vehiculos-all.component'


@NgModule({
  declarations: [VehiculosAllComponent],
  imports: [
    CommonModule,
    VehiculosRoutingModule
  ]
})
export class VehiculosModule { }
