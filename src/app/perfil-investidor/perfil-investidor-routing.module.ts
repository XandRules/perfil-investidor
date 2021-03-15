import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionarioComponent } from './questionario/questionario.component';
import { SaudacaoComponent } from './saudacao/saudacao.component';

const routes: Routes = [
  {path: '', component: SaudacaoComponent},
  {path: 'questionario', component: QuestionarioComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilInvestidorRoutingModule { }
