import { Component, OnInit } from '@angular/core';

import { IRestaurant } from './restaurant';
import { RestaurantService } from './restaurant.service';

@Component({
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {

  pageTitle: string = 'Restaurant List';
  

  constructor(private _restaurantService : RestaurantService) { }

  ngOnInit() {
  }

}
