import { Component, OnInit } from '@angular/core';
import { Pedido } from '../../models/pedido.model';
import { PedidoService } from '../../../services/pedido.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalNovoPedidoComponent } from "../../modal-novo-pedido/modal-novo-pedido.component";

@Component({
  selector: 'app-pedidos-home',
  templateUrl: './pedidos-home.component.html',
  styleUrls: ['./pedidos-home.component.css']
})
export class PedidosHomeComponent implements OnInit {
  pedidos: Pedido[] = [];
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

  constructor(private pedidoService: PedidoService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.carregarPedidos();
  }

  carregarPedidos(): void {
    this.pedidoService.listar().subscribe({
      next: (data) => {
        this.pedidos = data || [];
        this.filtrarPedidos();
      },
      error: (err) => {
        console.error('Erro ao carregar pedidos:', err);
      }
    });
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

  filtrarPorStatus(status: string): void {
    this.statusSelecionado = status;
    this.filtrarPedidos();
  }
  abrirFormulario() {
    this.dialog.open(ModalNovoPedidoComponent).afterClosed().subscribe(novoPedido => {
      if (novoPedido) {
        this.pedidoService.salvar(novoPedido).subscribe({
          next: (pedidoCriado) => {
            this.pedidos.push(pedidoCriado);
            this.filtrarPedidos();
          },
          error: (err) => {
            console.error("Erro ao criar pedido:", err);
          }
        });
      }
    });
  }

  removerPedido(id: number | undefined): void {
    if (id === undefined || id === null) {
      console.warn('Tentativa de remover pedido sem id — recarregando lista para sincronização.');
      this.carregarPedidos();
      return;
    }


    this.pedidos = this.pedidos.filter(p => p.id !== id);
    this.filtrarPedidos();

    this.pedidoService.remover(id).subscribe({
      next: () => {
        this.carregarPedidos();
      },
      error: (err) => {
        this.carregarPedidos();
      }
    });
  }
}
