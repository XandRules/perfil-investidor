import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { PerfilInvestidorRoutingModule } from './perfil-investidor-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
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
