import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Actor } from '../../../model/actor';
import { ActorService } from '../../../service/actor.service';


@Component({
  selector: 'app-actor-list',
  standalone: false,
  templateUrl: './actor-list.component.html',
  styleUrl: './actor-list.component.css'
})
export class ActorListComponent implements OnInit, OnDestroy{

  title:string = "Actor-List";
  actors!: Actor[];
  subscription!: Subscription;

  constructor(
      private actorSvc: ActorService
    ) { }



  ngOnInit(): void {
    this.subscription = this.actorSvc.list().subscribe(
      (resp) => {
        this.actors = resp;
      });
    }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
