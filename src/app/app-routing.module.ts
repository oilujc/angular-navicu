import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  	{
    	path: '', redirectTo: 'roles', pathMatch: 'full'
  	},
	  // {
	  //   path: 'rol',
	  //   loadChildren: () => import('./rol/rol.module').then(m => m.RolModule)
  	// },
  	{
    	path: '**',  redirectTo: 'rol', pathMatch: 'full'
  	},
	  {
	    path: 'user',
	    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
