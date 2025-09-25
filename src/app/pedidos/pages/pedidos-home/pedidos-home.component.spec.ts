import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosHomeComponent } from './pedidos-home.component';

describe('PedidosHomeComponent', () => {
  let component: PedidosHomeComponent;
  let fixture: ComponentFixture<PedidosHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidosHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedidosHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
