import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Credit } from '../model/credit';


const URL = 'http://localhost:8080/api/credits'

@Injectable({
  providedIn: 'root'
})
export class CreditService {

  constructor(private http: HttpClient) { }

  list(): Observable<Credit[]> {
    return this.http.get(URL + '/') as Observable<Credit[]>;

  }

  add(credit: Credit): Observable<Credit> {
    return this.http.post(URL, credit) as Observable<Credit>;
  }

  update(credit: Credit): Observable<Credit> {
    return this.http.put(URL + '/' + credit.id, credit) as Observable<Credit>;
  }

  getById(id: number): Observable<Credit> {
    return this.http.get(URL + '/' + id) as Observable<Credit>;
  }

  delete(id: number): Observable<any> {
    return this.http.delete(URL + '/' + id) as Observable<Credit>;
  }

  getCreditsForMovieId(movieId:number): Observable<Credit[]> {
    return this.http.get(URL + '/movie-credits/'+ movieId) as Observable<Credit[]>;

  }
}
