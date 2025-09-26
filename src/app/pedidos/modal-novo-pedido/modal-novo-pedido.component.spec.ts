import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNovoPedidoComponent } from './modal-novo-pedido.component';

describe('ModalNovoPedidoComponent', () => {
  let component: ModalNovoPedidoComponent;
  let fixture: ComponentFixture<ModalNovoPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalNovoPedidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalNovoPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
