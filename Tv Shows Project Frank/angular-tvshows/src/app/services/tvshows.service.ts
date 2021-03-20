import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tvshow } from '../models/tvshow.model';

const baseUrl = 'http://localhost:8080/api/tvshows';

@Injectable({
  providedIn: 'root'
})
export class TvshowsService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Tvshow[]> {
    return this.http.get<Tvshow[]>(baseUrl);
  }

  get(id: any): Observable<Tvshow> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Tvshow[]> {
    return this.http.get<Tvshow[]>(`${baseUrl}?title=${title}`);
  }
}
