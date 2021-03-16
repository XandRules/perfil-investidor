import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PerguntasService {

  apiUrlPerguntas = '/api/perguntas'
  apiUrlAlternativas = '/api/opcaoresposta'

  constructor(private http: HttpClient) { }

  getPerguntas(): Observable<any>{
    return this.http.get<any>(this.apiUrlPerguntas);
  }

  getAlternativas(): Observable<any>{
    return this.http.get<any>(this.apiUrlAlternativas);
  }

}
