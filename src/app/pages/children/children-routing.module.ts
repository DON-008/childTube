import { ChildrenModule } from './children.module';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildrenComponent } from './children.component';
import { HomeComponent } from './home/home.component';
import { SearhComponent } from './searh/searh.component';

const routes: Routes = [
  { path: '', component: ChildrenComponent,
    children: [
    { 
        path: 'home', 
        component:HomeComponent
    },
    // { ...any other child routes }
  ]

  },
  {
    path:'search',
    component:SearhComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildrenRoutingModule { }
