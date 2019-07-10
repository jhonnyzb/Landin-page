import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';

import { PeopleAllComponent } from './people-all/people-all.component';

@NgModule({
  declarations: [PeopleAllComponent],
  imports: [
    CommonModule,
    PeopleRoutingModule
  ]
})
export class PeopleModule { }
