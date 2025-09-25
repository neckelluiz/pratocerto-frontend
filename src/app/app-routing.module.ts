import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidosHomeComponent } from './pedidos/pages/pedidos-home/pedidos-home.component';
import { DetalhesComponent } from './pedidos/pages/detalhes/detalhes.component';

const routes: Routes = [
  { path: '', component:  PedidosHomeComponent },
  { path: 'pedidos/:id', component: DetalhesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
