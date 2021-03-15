import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PerguntasService {

  apiUrl = '/api/perguntas'

  constructor(private http: HttpClient) { }

  getPerguntas(): Observable<any>{
    return this.http.get<any>(this.apiUrl);
  }

}
