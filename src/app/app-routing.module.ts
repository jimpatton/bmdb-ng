import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './feature/movie/movie-list/movie-list.component';
import { MovieCreateComponent } from './feature/movie/movie-create/movie-create.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { MovieEditComponent } from './feature/movie/movie-edit/movie-edit.component';
import { MovieDetailComponent } from './feature/movie/movie-detail/movie-detail.component';
import { ActorListComponent } from './feature/actor/actor-list/actor-list.component';
import { ActorCreateComponent } from './feature/actor/actor-create/actor-create.component';
import { ActorEditComponent } from './feature/actor/actor-edit/actor-edit.component';
import { ActorDetailComponent } from './feature/actor/actor-detail/actor-detail.component';

const routes: Routes = [
  {path:'', redirectTo: '/movie-list', pathMatch: 'full'},
  {path:'movie-list', component: MovieListComponent},
  {path:'movie-create', component: MovieCreateComponent},
  {path:'movie-edit/:id', component: MovieEditComponent},
  {path:'movie-detail/:id', component: MovieDetailComponent},
  // {path:'**', component: NotFoundComponent},
  // {path:'', redirectTo: '/actor-list', pathMatch: 'full'},
  {path:'actor-list', component: ActorListComponent},
  {path:'actor-create', component: ActorCreateComponent},
  {path:'actor-edit/:id', component: ActorEditComponent},
  {path:'actor-detail/:id', component: ActorDetailComponent},
  {path:'**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
