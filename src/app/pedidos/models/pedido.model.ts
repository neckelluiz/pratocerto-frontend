export interface PedidoItem {
  nome: string;
  quantidade: number;
  preco: number;
}

export interface Pedido {
  id: number;
  numero: number;
  cliente: string;
  itens: PedidoItem[];
  endereco: string;
  total: number;
  hora: string;
  telefone: number;
  observacoes: string;
  status: 'pendente' | 'preparando' | 'pronto' | 'entregue';
}

export interface PedidoCreateDto {
  cliente: string;
  itens: PedidoItem[];
  endereco: string;
  total: number;
  telefone?: number;
  observacoes?: string;
  status?: 'pendente' | 'preparando' | 'pronto' | 'entregue';
}
