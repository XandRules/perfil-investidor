import { Perguntas } from './../models/perguntas.model';
import { PerguntasService } from './../service/perguntas.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-questionario',
  templateUrl: './questionario.component.html',
  styleUrls: ['./questionario.component.css']
})
export class QuestionarioComponent implements OnInit {

  perguntas: Perguntas[] = []

  respostaForm!: FormGroup;

  respostas: string[] = [];

  constructor(private perguntasService: PerguntasService, private fb: FormBuilder) {

    this.respostaForm = this.fb.group({
      respostas: this.fb.array([]) ,
    });
  }


  ngOnInit(): void {
    this.getPerguntas();
  }

  private getPerguntas(){
    this.perguntasService.getPerguntas().subscribe(
      (result : Perguntas[]) => {
        this.perguntas = result
      }
    )
  }

  salvar(){
    console.log(this.respostas);
  }

}
