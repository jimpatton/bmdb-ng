import { Component, OnDestroy, OnInit } from '@angular/core';
import { Movie } from '../../../model/movie';
import { Subscription } from 'rxjs';
import { MovieService } from '../../../service/movie.service';
import { SystemService } from '../../../service/system.service';

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
    private movieSvc: MovieService,
    private sysSvc: SystemService
  ) { }


  ngOnInit(): void {
    console.log('logged In User', this.sysSvc.loggedInUser);
    this.subscription = this.movieSvc.list().subscribe(
      (resp) => {
        this.movies = resp;
      });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

   delete(id: number) {
    this.subscription = this.movieSvc.delete(id).subscribe({
      next: () => {
        // refresh the movie list
        this.subscription = this.movieSvc.list().subscribe((resp) => {
          this.movies = resp;
        });
      },
      error: (err) => {
        console.log('Error deleting movie for id: '+id);
        alert('Error deleting movie for id: '+id);
      }
    });
  }

}