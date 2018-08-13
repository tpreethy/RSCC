
import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {
  tourn:any;
  constructor(public sanitizer:DomSanitizer,private router:ActivatedRoute) { 
    
  }

  ngOnInit(){
    this.router.params.forEach(params=>{
       this.tourn=params["id"];
     
    })
  }

  

  

}
