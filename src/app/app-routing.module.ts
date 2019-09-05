import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  	{
    	path: '', redirectTo: 'roles', pathMatch: 'full'
  	},
	{
	    path: 'roles',
	    loadChildren: () => import('./rol/rol.module').then(m => m.RolModule)
  	},
  	{ 
    	path: '**',  redirectTo: 'roles', pathMatch: 'full' 
  	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
