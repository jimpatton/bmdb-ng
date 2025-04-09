import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movie } from '../../../model/movie';
import { MovieService } from '../../../service/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from '../../../service/system.service';
import { User } from '../../../model/user';

@Component({
  selector: 'app-movie-detail',
  standalone: false,
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent implements OnInit, OnDestroy {
   title:string = 'Movie Detail';
   movieId!:number;
   movie!: Movie
   subscription!:Subscription;
   loggedInUser!:User;
     isAdmin:boolean = false;

constructor(
  private movieSvc: MovieService,
  private router: Router,
  private actRoute: ActivatedRoute,
  private sysSvc: SystemService,
 ) {}


   
  ngOnInit(): void {
    this.loggedInUser = this.sysSvc.loggedInUser;
    this.isAdmin = this.loggedInUser.admin;
    //get the movie id from the url
    this.actRoute.params.subscribe((parms) => {
      this.movieId = parms['id'];
      //get the movie for the id
      this.subscription = this.movieSvc.getById(this.movieId).subscribe({
        next:(resp) => {
          this.movie = resp;
        },
        error:(err) => {
          console.log('Error retrieving movie: ', err);
        }
      });
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

delete() {
    this.movieSvc.delete(this.movieId).subscribe({
      next: (resp) => {
        this.router.navigateByUrl('/movie-list');
      },
      error: err => {
        console.log(err);
      }
});
  }
}
