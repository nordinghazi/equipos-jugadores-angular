import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoJugadorComponent } from './listado-jugador.component';

describe('ListadoJugadorComponent', () => {
  let component: ListadoJugadorComponent;
  let fixture: ComponentFixture<ListadoJugadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoJugadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoJugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
