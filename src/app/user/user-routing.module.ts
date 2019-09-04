import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from "./components/list/list.component";
import { FormComponent } from "./components/form/form.component";

const routes: Routes = [
  { path:'', component: ListComponent },
  { path:'new', component: FormComponent },
  { path:'edit/{id}', component: FormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
