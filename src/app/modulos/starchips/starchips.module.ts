import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarchipsRoutingModule } from './starchips-routing.module';
import { StarchipsAllComponent } from './starchips-all/starchips-all.component';

@NgModule({
  declarations: [StarchipsAllComponent],
  imports: [
    CommonModule,
    StarchipsRoutingModule
  ]
})
export class StarchipsModule { }
