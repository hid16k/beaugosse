import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { TvshowsComponent } from './pages/tvshows/tvshows.component';
import { PeopleComponent } from './pages/people/people.component';
import { MoviedetailsComponent } from './pages/moviedetails/moviedetails.component';
import { TvshowdetailsComponent } from './pages/tvshowdetails/tvshowdetails.component';
import { PeopledetailsComponent } from './pages/peopledetails/peopledetails.component';

const routes: Routes = [
  {path:'', redirectTo:'movies', pathMatch: 'full'},
  {path:'movies', component:MoviesComponent},
  {path:'tvshows', component:TvshowsComponent},
  {path:'people', component:PeopleComponent},
  {path:'moviedetails/:id', component:MoviedetailsComponent},
  {path:'tvshowdetails/:id', component:TvshowdetailsComponent},
  {path:'peopledetails/:id', component:PeopledetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
