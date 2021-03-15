import { perguntas } from './../models/perguntas.model';
import { PerguntasService } from './../service/perguntas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questionario',
  templateUrl: './questionario.component.html',
  styleUrls: ['./questionario.component.css']
})
export class QuestionarioComponent implements OnInit {

  perguntas: perguntas[] = []

  constructor(private perguntasService: PerguntasService) { }

  ngOnInit(): void {
    this.getPerguntas();
  }

  private getPerguntas(){
    this.perguntasService.getPerguntas().subscribe(
      (result : any) => {
        this.perguntas = result
        console.log(this.perguntas)
      }
    )
  }

}
