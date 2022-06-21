import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPlazoFijoComponent } from './crear-plazo-fijo.component';

describe('CrearPlazoFijoComponent', () => {
  let component: CrearPlazoFijoComponent;
  let fixture: ComponentFixture<CrearPlazoFijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearPlazoFijoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPlazoFijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
