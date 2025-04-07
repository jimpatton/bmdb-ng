import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../model/menu.item';

@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
title = 'BMDB';
menuItems: MenuItem[] = [];


  ngOnInit(): void {
    this.menuItems = [          
      new MenuItem('Movie','/movie-list','Movie List'),
      new MenuItem('Actor','/actor-list','Actor List'),
      new MenuItem('Credit','/credit-list','Credit List'),
    ];
  }

}
