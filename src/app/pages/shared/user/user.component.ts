import { Router } from '@angular/router';
import {AfterViewInit, Component, ElementRef, HostListener,Directive, OnDestroy, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})


export class UserComponent {

  sticky = false;
  constructor(
    private router : Router
  ){

  }

  userSelected(){
    this.router.navigateByUrl('children/home')
  }

}
