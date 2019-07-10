import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculosAllComponent } from './vehiculos-all.component';

describe('VehiculosAllComponent', () => {
  let component: VehiculosAllComponent;
  let fixture: ComponentFixture<VehiculosAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiculosAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculosAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
