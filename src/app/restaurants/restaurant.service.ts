import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { IRestaurant } from './restaurant';

@Injectable()
export class RestaurantService {
  private _restaurantUrl = './api/Restaurants.json';

  constructor(private _http: HttpClient) { }

  getRestaurants(): Observable<IRestaurant[]> {
    return this._http.get<IRestaurant[]>(this._restaurantUrl)
        .do(data => console.log('All: ' + JSON.stringify(data)))
        .catch(this.handleError);
  }

  getRestaurant(id: number): Observable<IRestaurant> {
      return this.getRestaurants()
          .map((products: IRestaurant[]) => products.find(p => p.id === id));
  }

  private handleError(err: HttpErrorResponse) {
      // in a real world app, we may send the server to some remote logging infrastructure
      // instead of just logging it to the console
      let errorMessage = '';
      if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          errorMessage = `An error occurred: ${err.error.message}`;
      } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
      }
      console.error(errorMessage);
      return Observable.throw(errorMessage);
  }
}
