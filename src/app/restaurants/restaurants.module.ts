import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { RestaurantListComponent } from './restaurant-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'restaurantsList', component: RestaurantListComponent}
    ])
  ],
  declarations: [RestaurantListComponent]
})
export class RestaurantsModule { }
