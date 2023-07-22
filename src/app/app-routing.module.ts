import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./pages/parent/auth/auth.module').then(m => m.AuthModule) },
  { path: 'user', loadChildren: () => import('./pages/shared/user/user.module').then(m => m.UserModule) },
  { path: 'children', loadChildren: () => import('./pages/children/children.module').then(m => m.ChildrenModule) }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
