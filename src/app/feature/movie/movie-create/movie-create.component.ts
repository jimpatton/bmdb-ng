import { Component, OnDestroy, OnInit } from '@angular/core';
import { Movie } from '../../../model/movie';
import { Subscription } from 'rxjs';
import { MovieService } from '../../../service/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-create',
  standalone: false,
  templateUrl: './movie-create.component.html',
  styleUrl: './movie-create.component.css'
})
export class MovieCreateComponent implements OnInit, OnDestroy {

  title: string = "Movie-Create";
  newMovie: Movie = new Movie();
  subscription!: Subscription;
  ratings: string[] = ["G", "PG", "PG-13", "R", "NC-17"];

  constructor(private movieSvc: MovieService, private router: Router
  ) { }

  ngOnDestroy(): void { }

  ngOnInit(): void {
    this.subscription.unsubscribe();
  }

  addMovie(): void {
    this.subscription = this.movieSvc.add(this.newMovie).subscribe((resp) => { 
    this.router.navigateByUrl('/movie-list');
    });
  }
}


