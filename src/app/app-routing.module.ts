import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'perfil-investidor', pathMatch: 'full'},
  {path: 'perfil-investidor', loadChildren: () => import('./perfil-investidor/perfil-investidor.module').then( m => m.PerfilInvestidorModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
