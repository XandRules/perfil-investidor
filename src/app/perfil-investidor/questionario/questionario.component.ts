import { Perguntas } from './../models/perguntas.model';
import { PerguntasService } from './../service/perguntas.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-questionario',
  templateUrl: './questionario.component.html',
  styleUrls: ['./questionario.component.css']
})
export class QuestionarioComponent implements OnInit {

  perguntas: Perguntas[] = [];
  alternativas: string[] = [];

  respostaForm!: FormGroup;

  respostas: string[] = [];
  respostasOptions: string[] = [];

  constructor(private perguntasService: PerguntasService, private fb: FormBuilder, private router: Router) {

    this.respostaForm = this.fb.group({
      respostas: this.fb.array([ ]) ,
    });
  }


  ngOnInit(): void {
    this.getPerguntas();
    this.getAlternativas();
  }


  getAlternativas() {

    this.perguntasService.getAlternativas().subscribe(
      (result : string[]) => {
        this.alternativas = result
        console.log(this.alternativas)
      }
    )
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

  home(){
    this.router.navigateByUrl('/');
  }

}
