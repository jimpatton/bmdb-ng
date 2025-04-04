import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../model/movie';

const URL = 'http://localhost:8080/api/movies'

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  list(): Observable<Movie[]> {
    return this.http.get(URL + '/') as Observable<Movie[]>;

  }

  add(movie: Movie): Observable<Movie> {
    return this.http.post(URL, movie) as Observable<Movie>;
  }

  update(movie: Movie): Observable<Movie> {
    return this.http.put(URL + '/' + movie.id, movie) as Observable<Movie>;
  }

  getById(id: number): Observable<Movie> {
    return this.http.get(URL + '/' + id) as Observable<Movie>;
  }

  delete(id: number): Observable<any> {
    return this.http.delete(URL + '/' + id) as Observable<Movie>;
  }
}
