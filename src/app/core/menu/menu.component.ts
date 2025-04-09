import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../model/menu.item';
import { User } from '../../model/user';
import { SystemService } from '../../service/system.service';

@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
title = 'BMDB';
menuItems: MenuItem[] = [];
welcomeMsg!:string;
loggedInUser!:User;

constructor(
  private sysSvc: SystemService
){}


  ngOnInit(): void {
    this.loggedInUser = this.sysSvc.loggedInUser;
    this.welcomeMsg = `Hello, ${this.loggedInUser.firstName}!`;
    this.menuItems = [          
      new MenuItem('Movie','/movie-list','Movie List'),
      new MenuItem('Actor','/actor-list','Actor List'),
      new MenuItem('Credit','/credit-list','Credit List'),
    ];
  }

}
