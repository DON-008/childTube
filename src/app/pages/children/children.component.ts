import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent {
  navbg:any;
  // @HostListener('document:scroll') scrollover(){
    
  //   if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0)
  //   {
  //     this.navbg = "header-bg"
  //   }else
  //   {
  //       this.navbg = ""
  //   }
  // }

}
