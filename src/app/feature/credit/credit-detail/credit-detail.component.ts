import { Component, OnDestroy, OnInit } from '@angular/core';
import { Credit } from '../../../model/credit';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { CreditService } from '../../../service/credit.service';

@Component({
  selector: 'app-credit-detail',
  standalone: false,
  templateUrl: './credit-detail.component.html',
  styleUrl: './credit-detail.component.css'
})
export class CreditDetailComponent implements OnInit, OnDestroy{
  title:string = 'Credit Detail';
  creditId!:number;
  credit!: Credit
  subscription!:Subscription;
  
  constructor(
  private creditSvc: CreditService,
  private router: Router,
  private actRoute: ActivatedRoute,
 ) {}

 
ngOnInit(): void {
    //get the credit id from the url
    this.actRoute.params.subscribe((parms) => {
      this.creditId = parms['id'];
      //get the movie for the id
      this.subscription = this.creditSvc.getById(this.creditId).subscribe({
        next:(resp) => {
          this.credit = resp;
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
    this.creditSvc.delete(this.creditId).subscribe({
      next: (resp) => {
        this.router.navigateByUrl('/credit-list');
      },
      error: err => {
        console.log(err);
      }
});
  }
}