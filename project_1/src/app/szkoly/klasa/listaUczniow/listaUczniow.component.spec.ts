import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaUczniowComponent } from './listaUczniow.component';

describe('UczniowieComponent', () => {
  let component: ListaUczniowComponent;
  let fixture: ComponentFixture<ListaUczniowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaUczniowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaUczniowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
