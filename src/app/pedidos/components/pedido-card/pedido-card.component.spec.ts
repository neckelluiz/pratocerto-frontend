import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoCardComponent } from './pedido-card.component';

describe('PedidoCardComponent', () => {
  let component: PedidoCardComponent;
  let fixture: ComponentFixture<PedidoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidoCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedidoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
