import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { TermosComponent } from '../termos/termos.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private modalService: BsModalService) { }

  showModal(title: string, body: string, okTxt: string, cancelTxt?: string): Subject<boolean>{
    const bsModalRef: BsModalRef = this.modalService.show(TermosComponent);

    bsModalRef.content.title = title;
    bsModalRef.content.body = body;
    bsModalRef.content.okTxt = okTxt;

    if(cancelTxt){
      bsModalRef.content.cancelTxt = cancelTxt;
    }

    return (<TermosComponent>bsModalRef.content).confirmResult;

  }
}
