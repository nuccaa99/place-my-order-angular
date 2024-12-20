import { HttpClient, HttpParams } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Restaurant } from './restaurant';

export interface ResponseData<DataType> {
  data: DataType[];
}

export interface State {
  name: string;
  short: string;
}

export interface City {
  name: string;
  state: string;
}

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  constructor(private httpClient: HttpClient) {}

  getRestaurants(): Observable<ResponseData<Restaurant>> {
    return this.httpClient.get<ResponseData<Restaurant>>(
      environment.apiUrl + '/restaurants'
    );
  }

  getStates(): Observable<ResponseData<State>> {
    return this.httpClient.get<any>(environment.apiUrl + '/states');
  }

  getCities(state: string): Observable<ResponseData<City>> {
    const params = new HttpParams().set('state', state);
    return this.httpClient.get<any>(environment.apiUrl + '/cities', { params });
  }
}
