import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsAllComponent } from './films-all.component';

describe('FilmsAllComponent', () => {
  let component: FilmsAllComponent;
  let fixture: ComponentFixture<FilmsAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmsAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
