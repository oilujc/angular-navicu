import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  	{
    	path: 'rol', redirectTo: 'login', pathMatch: 'full'
  	},
	{
	    path: 'rol',
	    loadChildren: () => import('./rol/rol.module').then(m => m.RolModule)
  	},
  	{ 
    	path: '**',  redirectTo: 'rol', pathMatch: 'full' 
  	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
