import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeciesAllComponent } from './species-all.component';

describe('SpeciesAllComponent', () => {
  let component: SpeciesAllComponent;
  let fixture: ComponentFixture<SpeciesAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeciesAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeciesAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
