import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { PedidoCreateDto } from 'src/app/pedidos/models/pedido.model';

@Component({
  selector: 'app-modal-novo-pedido',
  templateUrl: './modal-novo-pedido.component.html',
  styleUrls: ['./modal-novo-pedido.component.css']
})
export class ModalNovoPedidoComponent {
  pedido: PedidoCreateDto = {
    cliente: '',
    status: 'pendente',
    endereco: '',
    itens: [
      {
        nome: '',
        quantidade: 1,
        preco: 0
      }
    ],
    total: 0
  };

  constructor(private dialogRef: MatDialogRef<ModalNovoPedidoComponent>) {}

  adicionarItem() {
    this.pedido.itens.push({
      nome: '',
      quantidade: 1,
      preco: 0
    });
  }

  removerItem(index: number) {
    this.pedido.itens.splice(index, 1);
  }

  calcularTotal(): number {
    return this.pedido.itens.reduce((total, item) => {
      return total + item.quantidade * item.preco;
    }, 0);
  }

  criarPedido() {
    if (!this.pedido.cliente.trim()) {
      alert('Informe o nome do cliente!');
      return;
    }

    if (this.pedido.itens.length === 0) {
      alert('Adicione pelo menos um item!');
      return;
    }

    const pedidoFinal: PedidoCreateDto = {
      ...this.pedido,
      total: this.calcularTotal()
    };

    this.dialogRef.close(pedidoFinal);
  }

  fechar() {
    this.dialogRef.close();
  }
}
