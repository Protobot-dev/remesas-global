import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonEnvioComponent } from './boton-envio.component';

describe('BotonEnvioComponent', () => {
  let component: BotonEnvioComponent;
  let fixture: ComponentFixture<BotonEnvioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonEnvioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonEnvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
