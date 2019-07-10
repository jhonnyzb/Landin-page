import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetasAllComponent } from './planetas-all.component';

describe('PlanetasAllComponent', () => {
  let component: PlanetasAllComponent;
  let fixture: ComponentFixture<PlanetasAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetasAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetasAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
