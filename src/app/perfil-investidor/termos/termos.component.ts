import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-termos',
  templateUrl: './termos.component.html',
  styleUrls: ['./termos.component.css']
})
export class TermosComponent implements OnInit {

  @Input() title!: string;
  @Input() body!: string;
  @Input() okTxt!: string;
  @Input() cancelTxt: string = 'Cancelar';

  confirmResult!: Subject<boolean>;

  constructor(public bsModalRef: BsModalRef) {

   }

  ngOnInit(): void {
    this.confirmResult = new Subject();

  }

  onConfirm(){
    this.confirmAndClose(true)
  }

  onClose(){
    this.confirmAndClose(false)
  }

  private confirmAndClose(value: boolean){
    this.confirmResult.next(value);
    this.bsModalRef.hide();
  }

}
