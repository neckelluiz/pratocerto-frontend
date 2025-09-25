import { Component, OnInit } from '@angular/core';
import { Pedido } from '../../models/pedido.model';
import { PedidoService } from '../../../services/pedido.service';

@Component({
  selector: 'app-pedidos-home',
  templateUrl: './pedidos-home.component.html',
  styleUrls: ['./pedidos-home.component.css']
})
export class PedidosHomeComponent implements OnInit {
  pedidos: Pedido[] = [];
  pedidosOriginais: Pedido[] = [];
  pedidosFiltrados: Pedido[] = [];
  filtroBusca: string = '';
  statusSelecionado: string = 'todos';

  contadores = {
    todos: 0,
    pendente: 0,
    preparando: 0,
    pronto: 0,
    entregue: 0
  };

  constructor(private pedidoService: PedidoService) {}

  ngOnInit(): void {
    this.carregarPedidos();
  }

  filtrarPedidos(): void {
    const busca = this.filtroBusca.toLowerCase();

    this.pedidosFiltrados = this.pedidos.filter(pedido => {
      const clienteMatch = pedido.cliente?.toLowerCase().includes(busca);
      const numeroMatch = pedido.id?.toString().includes(this.filtroBusca);

      const statusMatch =
        this.statusSelecionado === 'todos' ||
        pedido.status?.toLowerCase() === this.statusSelecionado.toLowerCase();

      return (clienteMatch || numeroMatch) && statusMatch;
    });

    this.contadores = {
      todos: this.pedidos.length,
      pendente: this.pedidos.filter(p => p.status?.toLowerCase() === 'pendente').length,
      preparando: this.pedidos.filter(p => p.status?.toLowerCase() === 'preparando').length,
      pronto: this.pedidos.filter(p => p.status?.toLowerCase() === 'pronto').length,
      entregue: this.pedidos.filter(p => p.status?.toLowerCase() === 'entregue').length
    };
  }

  carregarPedidos(): void {
    this.pedidoService.listar().subscribe({
      next: (data) => {
        this.pedidos = data;
        this.filtrarPedidos();
      },
      error: (err) => {
        console.error('Erro ao carregar pedidos:', err);
      }
    });
  }


  filtrarPorStatus(status: string): void {
    this.statusSelecionado = status;
    this.filtrarPedidos();
  }

}
