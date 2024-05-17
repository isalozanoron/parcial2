import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Anime } from './anime';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  private apiUrl: string = environment.baseUrl + 'animes';

  constructor(private http: HttpClient) { }

  getAnimes(): Observable<Anime[]> {
    return this.http.get<Anime[]>(this.apiUrl);
  }}
