import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioDonacionesComponent } from './formulario-donaciones.component';

describe('FormularioDonacionesComponent', () => {
  let component: FormularioDonacionesComponent;
  let fixture: ComponentFixture<FormularioDonacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioDonacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioDonacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
