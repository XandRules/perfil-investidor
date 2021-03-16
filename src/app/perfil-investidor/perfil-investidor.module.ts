import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { PerfilInvestidorRoutingModule } from './perfil-investidor-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { QuestionarioComponent } from './questionario/questionario.component';
import { SaudacaoComponent } from './saudacao/saudacao.component';

@NgModule({
  declarations: [QuestionarioComponent, SaudacaoComponent],
  imports: [
    CommonModule,
    PerfilInvestidorRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ]
})
export class PerfilInvestidorModule { }
