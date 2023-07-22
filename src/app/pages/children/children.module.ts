import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildrenRoutingModule } from './children-routing.module';
import { ChildrenComponent } from './children.component';
import { HomeComponent } from './home/home.component';
import { SearhComponent } from './searh/searh.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    ChildrenComponent,
    HomeComponent,
    SearhComponent
  ],
  imports: [
    CommonModule,
    ChildrenRoutingModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatIconModule
    
  ]
})
export class ChildrenModule { }
