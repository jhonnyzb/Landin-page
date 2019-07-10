import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleAllComponent } from './people-all.component';

describe('PeopleAllComponent', () => {
  let component: PeopleAllComponent;
  let fixture: ComponentFixture<PeopleAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
