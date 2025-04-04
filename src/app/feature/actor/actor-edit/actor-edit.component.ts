import { Component, OnDestroy, OnInit } from '@angular/core';
import { Actor } from '../../../model/actor';
import { Subscription } from 'rxjs';
import { ActorService } from '../../../service/actor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actor-edit',
  standalone: false,
  templateUrl: './actor-edit.component.html',
  styleUrl: './actor-edit.component.css'
})
export class ActorEditComponent implements OnInit, OnDestroy {
  title:string = 'Actor Edit';
  actorId!:number;
  actor!: Actor
  subscription!:Subscription;
  genders:string[] = ["M", "F"]; 
  
  
  constructor(
    private actorSvc: ActorService,
    private router: Router,
    private actRoute: ActivatedRoute,
  ) {}
  
  ngOnInit(): void {
    //get the actor id from the url
    this.actRoute.params.subscribe((parms) => {
      this.actorId = parms['id'];
      //get the actor for the id
      this.subscription = this.actorSvc.getById(this.actorId).subscribe({
        next:(resp) => {
          this.actor = resp;
        },
        error:(err) => {
          console.log('Error retrieving actor: ', err);
        }
      });
    });
  }
  
  save() {
    this.actorSvc.update(this.actor).subscribe({
      next: (resp) => {
        this.actor = resp;
        this.router.navigateByUrl('/actor-list');
      },
      error: (err) => {
        console.log('Error saving actor: ', err);
      }
    });
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
