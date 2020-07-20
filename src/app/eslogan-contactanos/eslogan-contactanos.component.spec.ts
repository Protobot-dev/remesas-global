import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsloganContactanosComponent } from './eslogan-contactanos.component';

describe('EsloganContactanosComponent', () => {
  let component: EsloganContactanosComponent;
  let fixture: ComponentFixture<EsloganContactanosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsloganContactanosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsloganContactanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
