import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';

@Component({
  selector: 'app-saudacao',
  templateUrl: './saudacao.component.html',
  styleUrls: ['./saudacao.component.css']
})
export class SaudacaoComponent implements OnInit, AfterViewInit {

  @ViewChild('termos', { static: false })
  modalTela!: ElementRef;

  constructor() {
   }

  ngAfterViewInit(): void {
    let openModal: Observable<any> = fromEvent(this.modalTela.nativeElement, 'click');

    openModal.subscribe(() => {

      return;
    })
  }

  ngOnInit(): void {
  }

  saudacaoClick(): void{

  }

}
