import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-moview-modal',
  templateUrl: './moview-modal.component.html',
  styleUrls: ['./moview-modal.component.css']
})
export class MoviewModalComponent {
  safeURL :SafeResourceUrl;
  constructor(
    @Inject(MAT_DIALOG_DATA) private movieData: any, private _sanitizer: DomSanitizer
    ) { 
      this.safeURL =  this._sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/c9F5kMUfFKk");             
      }

}
