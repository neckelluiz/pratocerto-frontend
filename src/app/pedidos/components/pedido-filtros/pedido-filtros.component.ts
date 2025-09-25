import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pedido-filtros',
  templateUrl: './pedido-filtros.component.html',
  styleUrls: ['./pedido-filtros.component.css']
})
export class PedidoFiltrosComponent {
  @Input() contadores!: {
    todos: number;
    pendente: number;
    preparando: number;
    pronto: number;
    entregue: number;
  };
  @Output() statusSelecionado = new EventEmitter<string>();

  status: string = 'todos';

  selecionar(status: string) {
    this.status = status;
    this.statusSelecionado.emit(status);
  }
}
