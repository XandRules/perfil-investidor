import { Termos } from './../models/termos.model';
import { TermosService } from './../service/termos.service';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { EMPTY, empty, fromEvent, Observable } from 'rxjs';
import { take, switchMap } from 'rxjs/operators';
import { ModalService } from '../service/modal-service.service';

@Component({
  selector: 'app-saudacao',
  templateUrl: './saudacao.component.html',
  styleUrls: ['./saudacao.component.css']
})
export class SaudacaoComponent implements OnInit {

  termos!: Termos

  constructor(
    private modalService: ModalService,
    private router: Router,
    private termosService: TermosService) {

    }

  ngOnInit(): void {
    this.getTermos();
  }

  private getTermos(){
    this.termosService.getTerm().subscribe(
      (result : any) => {
        this.termos = result[0]
      }
    )
  }

  saudacaoClick(): void{

    const result = this.modalService.showModal(
      this.termos.titulo,
      this.termos.termo,
      'OK, Entendi',
      'Não Aceito'
    );

    result.asObservable()
    .pipe(
      take(1),
      switchMap(result => result ? this.router.navigateByUrl('perfil-investidor/questionario'): EMPTY )
    )
    .subscribe();
  }

  aceito(){
    this.router.navigateByUrl('perfil-investidor/questionario');
  }

}


