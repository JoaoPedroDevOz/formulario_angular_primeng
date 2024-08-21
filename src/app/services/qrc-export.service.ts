import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cartas, Gosto } from '../../gosto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QrcExportService {

  private readonly API = 'http://localhost:3000/gostos';

  constructor(private http: HttpClient) { }

  listar(): Observable<Gosto[]> {
    return this.http.get<Gosto[]>(this.API)
  }

  criar(gosto: Gosto): Observable<Cartas> {
    return this.http.post<Cartas>(this.API, gosto);
  }
}
