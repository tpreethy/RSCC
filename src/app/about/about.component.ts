import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

   

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public sanitizer:DomSanitizer) { }

  ngOnInit() {
  }

}
