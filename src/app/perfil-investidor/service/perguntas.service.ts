import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PerguntasService {

  apiUrlPerguntas = '/api/perguntas'
  apiUrlRespostas = '/api/respostas'
  apiUrlAlternativas = '/api/opcaoresposta'

  constructor(private http: HttpClient) { }

  getPerguntas(): Observable<any>{
    return this.http.get<any>(this.apiUrlPerguntas);
  }

  getAlternativas(): Observable<any>{
    return this.http.get<any>(this.apiUrlAlternativas);
  }

  getById(id: number): Observable<any>{
    return this.http.get<any>(`${this.apiUrlRespostas}/${id}`);
  }

  save(value: string[]){
    let data= {
      id: 1,
      value: value
    }
    return this.http.post(this.apiUrlRespostas, data);
  }

}
