import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolRoutingModule } from './rol-routing.module';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListComponent, FormComponent],
  imports: [
    CommonModule,
    RolRoutingModule,
    ReactiveFormsModule
  ]
})
export class RolModule { }
