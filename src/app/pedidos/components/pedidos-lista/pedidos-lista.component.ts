import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pedido } from '../../models/pedido.model';

@Component({
  selector: 'app-pedidos-lista',
  templateUrl: './pedidos-lista.component.html',
  styleUrls: ['./pedidos-lista.component.css']
})
export class PedidosListaComponent {
  @Input() pedidos: Pedido[] = [];
  @Output() pedidoSelecionado = new EventEmitter<Pedido>();
  pedido: Pedido[] = [];

  selecionarPedido(pedido: Pedido) {
    this.pedidoSelecionado.emit(pedido);
  }
}
