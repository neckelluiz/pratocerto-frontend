import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pedido } from '../../models/pedido.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedido-card',
  templateUrl: './pedido-card.component.html',
  styleUrls: ['./pedido-card.component.css']
})
export class PedidoCardComponent {
  @Input() pedido!: Pedido;
  @Output() selecionar = new EventEmitter<Pedido>();
  @Output() remover = new EventEmitter<number>();

  constructor(private router: Router) {}

  abrirDetalhes() {
    this.router.navigate(['/pedidos', this.pedido.id]);
  }

  getStatusClass(status: string): string {
    return status.toLowerCase().replace(/\s+/g, '-');
  }

  removerPedido() {
    this.remover.emit(this.pedido.id);
  }

  formatarHora(hora: string): string {
    const date = new Date(`1970-01-01T${hora}`);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

}
