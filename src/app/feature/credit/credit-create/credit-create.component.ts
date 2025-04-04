import { Component, OnDestroy, OnInit } from '@angular/core';
import { Credit } from '../../../model/credit';
import { Subscription } from 'rxjs';
import { CreditService } from '../../../service/credit.service';
import { Router } from '@angular/router';
import { Actor } from '../../../model/actor';
import { Movie } from '../../../model/movie';
import { ActorService } from '../../../service/actor.service';
import { MovieService } from '../../../service/movie.service';

@Component({
  selector: 'app-credit-create',
  standalone: false,
  templateUrl: './credit-create.component.html',
  styleUrl: './credit-create.component.css'
})
export class CreditCreateComponent implements OnInit, OnDestroy {

title: string = "Credit-Create";
  newCredit: Credit = new Credit();
  subscription!: Subscription;
  actors!: Actor[];
  movies!: Movie[];
  
 

constructor(
  private creditSvc: CreditService, 
  private actorSvc: ActorService,
  private movieSvc: MovieService,
  private router: Router
  ) { }

  ngOnInit(): void {
    //populate list of movies
    this.subscription = this.movieSvc.list().subscribe({
      next: (resp) => {
        this.movies = resp;
      },
      error: (err) => {
        console.error(
          'Credit Create Error: error loading movies.' + err.message
        );
      },
    });
    //populate list of actors
    this.subscription = this.actorSvc.list().subscribe({
      next: (resp) => {
        this.actors = resp;
      },
      error: (err) => {
        console.error(
          'Credit Create Error: error loading actors.' + err.message
        );
      },
    });
  }

  addCredit() {
    this.subscription = this.creditSvc.add(this.newCredit).subscribe({
      next: (resp) => {
        this.router.navigateByUrl('/credit-list');
      },
      error: (err) => {
        console.error('Error creating credit: ' + err.message);
      },
    });
  }
  
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}