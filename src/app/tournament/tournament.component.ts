import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit {
  tournament:any;
  constructor(public sanitizer:DomSanitizer,private router:ActivatedRoute) { }

  ngOnInit() {
    this.router.params.forEach(params=>{
      this.tournament=params["id"];
    
   })
  }

}
