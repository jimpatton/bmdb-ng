import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Actor } from '../../../model/actor';
import { Router } from '@angular/router';
import { ActorService } from '../../../service/actor.service';

@Component({
  selector: 'app-actor-create',
  standalone: false,
  templateUrl: './actor-create.component.html',
  styleUrl: './actor-create.component.css'
})
export class ActorCreateComponent implements OnInit, OnDestroy{
  title: string = "Actor-Create";
    newActor: Actor = new Actor();
    subscription!: Subscription;
    genders:string[]=["M","F"];

    constructor(private actorSvc: ActorService, private router: Router
  ) { }

  ngOnInit(): void {
  //  this.subscription.unsubscribe(); 
  }
  ngOnDestroy(): void {
    
  }

  addActor(): void {
    this.subscription = this.actorSvc.add(this.newActor).subscribe((resp) => { 
    this.router.navigateByUrl('/actor-list');
    });
  }
}
