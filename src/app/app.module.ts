import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PedidoFiltrosComponent } from './pedidos/components/pedido-filtros/pedido-filtros.component';
import { PedidosHomeComponent } from './pedidos/pages/pedidos-home/pedidos-home.component';
import { FormsModule } from "@angular/forms";
import { PedidosListaComponent } from './pedidos/components/pedidos-lista/pedidos-lista.component';
import { PedidoCardComponent } from './pedidos/components/pedido-card/pedido-card.component';
import { HttpClientModule } from "@angular/common/http";
import { MatIconModule } from '@angular/material/icon';
import { DetalhesComponent } from './pedidos/pages/detalhes/detalhes.component';


@NgModule({
  declarations: [
    AppComponent,
    PedidosHomeComponent,
    PedidoFiltrosComponent,
    PedidosListaComponent,
    PedidoCardComponent,
    DetalhesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
