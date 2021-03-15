import { Termos } from './../models/termos.model';
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TermosService {

  apiUrl = '/api/termos'

  constructor(private http: HttpClient) { }

  getTerm(): Observable<Termos>{
    return this.http.get<Termos>(this.apiUrl);
  }

}
