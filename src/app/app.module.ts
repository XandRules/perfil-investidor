
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InMemQuestionsService } from './in-memory-database';
import { PerfilInvestidorModule } from './perfil-investidor/perfil-investidor.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    PerfilInvestidorModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemQuestionsService),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
