import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pedido } from "../pedidos/models/pedido.model";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private apiUrl = 'http://localhost:8080';
  private baseUrl = '/api/pedidos';

  constructor(private http: HttpClient) {}

  listar(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(`${this.apiUrl}${this.baseUrl}`);
  }

  buscarPorNumero(id: number): Observable<Pedido> {
    return this.http.get<Pedido>(`${this.apiUrl}${this.baseUrl}/${id}`);
  }

}
