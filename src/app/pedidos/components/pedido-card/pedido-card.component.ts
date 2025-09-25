import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pedido } from '../../models/pedido.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedido-card',
  templateUrl: './pedido-card.component.html',
  styleUrls: ['./pedido-card.component.css']
})
export class PedidoCardComponent {
  constructor(private router: Router) {
  }
  @Input() pedido!: Pedido;
  @Output() selecionar = new EventEmitter<Pedido>();

  abrirDetalhes() {
    this.router.navigate(['/pedidos', this.pedido.id]);
  }
  getStatusClass(status: string): string {
    return status.toLowerCase().replace(/\s+/g, '-');
  }
}
