import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule, NgbCollapseModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import {Routes,RouterModule} from '@angular/router';



import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { TournamentComponent } from './tournament/tournament.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';



const appRoutes:Routes= [
        {path:'home',component:HomeComponent},
        {path:'team/:id',component: TeamComponent},
        {path:'tournament/:id',component: TournamentComponent},
        {path:'contact',component:ContactComponent},
        { path: '**', redirectTo: 'home', pathMatch: 'full' }

      ];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    AboutComponent,
    TeamComponent,
    TournamentComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    NgbCollapseModule.forRoot(),
    NgbDropdownModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
