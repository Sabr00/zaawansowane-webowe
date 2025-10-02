import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlasaComponent } from './klasa.component';

describe('KlasaComponent', () => {
  let component: KlasaComponent;
  let fixture: ComponentFixture<KlasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KlasaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KlasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
