import { Perguntas } from './../models/perguntas.model';
import { PerguntasService } from './../service/perguntas.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-questionario',
  templateUrl: './questionario.component.html',
  styleUrls: ['./questionario.component.css']
})
export class QuestionarioComponent implements OnInit {

  perguntas: Perguntas[] = [];
  alternativas: string[] = [];

  respostas: string[] = [];

  numeroDeAlternativas: number = 0;
  valid: boolean = false;
  currentAction!: string;

  constructor(
    private perguntasService: PerguntasService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService) {

  }


  ngOnInit(): void {
    this.getPerguntas();
    this.getAlternativas();
    this.validade();
    this.setCurrentAction();
    this.loadResource();
  }

  private setCurrentAction() {
    if (this.route.snapshot.url[1]?.path) {
      this.currentAction = this.route.snapshot.url[1].path
    }
  }

  protected loadResource() {
    if (this.currentAction == "resultado") {

      const id: string = this.route.snapshot.params.id;

      this.perguntasService.getById(+id)

        .subscribe(resource => {
          this.respostas = resource.value
          this.valid = true;
        },
          error => {
            alert('Ocorreu um erro no servidor')
            this.router.navigateByUrl('perfil-investidor/questionario')
          }
        )
    }
  }


  private getAlternativas() {

    this.perguntasService.getAlternativas().subscribe(
      (result: string[]) => {
        this.alternativas = result
      }
    )
  }

  private getPerguntas() {
    this.perguntasService.getPerguntas().subscribe(
      (result: Perguntas[]) => {
        this.perguntas = result
      }
    )
  }


  private create() {
    this.perguntasService.save(this.respostas).subscribe(
      (result: any) => {
        this.toastr.success('Dados Salvos', 'Seu cadastro foi salvo!');
        this.router.navigate(['perfil-investidor', 'questionario', 'resultado', result.id])
      }
    )
  }

  private update() {
    this.perguntasService.update(this.respostas).subscribe(
      (result: any) => {
        this.router.navigate(['perfil-investidor', 'questionario', 'resultado', result.id])
      }
    )
  }

  salvar() {
    if (this.currentAction == "resultado") {
      this.update()
    } else {
      this.create();
    }
  }

  home() {
    this.router.navigateByUrl('/');
  }

  validade() {

    let len = 0;
    for (const pergunta of this.perguntas) {
      if (pergunta.type === 'radio') {
        len++;
      } else {
        len += pergunta.alternativas.length;
      }
    }
    this.numeroDeAlternativas = len;
  }

  isValid() {
    this.validade();

    let len = 0;

    for (const p of this.respostas) {
      if (p != null) {
        len++;
      }
    }


    if (this.numeroDeAlternativas === len + 1) {
      this.valid = true;
    }
  }

}
