
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InMemQuestionsService } from './in-memory-database';
import { PerfilInvestidorModule } from './perfil-investidor/perfil-investidor.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
  AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    PerfilInvestidorModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemQuestionsService),
    ModalModule.forRoot(),
    ToastrModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
