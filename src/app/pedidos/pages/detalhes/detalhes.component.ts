import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PedidoService } from '../../../services/pedido.service';
import { Pedido } from '../../models/pedido.model';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {
  pedido!: Pedido;

  constructor(
    private route: ActivatedRoute,
    private pedidoService: PedidoService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pedidoService.buscarPorNumero(+id).subscribe({
        next: (data) => {
          this.pedido = data;
        },
        error: (err) => {
          console.error('Erro ao buscar pedido:', err);
        }
      });
    }
  }

}
