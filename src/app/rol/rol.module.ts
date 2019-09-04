import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolRoutingModule } from './rol-routing.module';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    RolRoutingModule
  ]
})
export class RolModule { }
