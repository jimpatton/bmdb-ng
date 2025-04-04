import { Component, OnDestroy, OnInit } from '@angular/core';
import { Movie } from '../../../model/movie';
import { Subscription } from 'rxjs';
import { MovieService } from '../../../service/movie.service';

@Component({
  selector: 'app-movie-list',
  standalone: false,
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent implements OnInit, OnDestroy {


  title: string = "Movie-List";
  movies!: Movie[];
  subscription!: Subscription;

  constructor(
    private movieSvc: MovieService
  ) { }


  ngOnInit(): void {
    this.subscription = this.movieSvc.list().subscribe(
      (resp) => {
        this.movies = resp;
      });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}