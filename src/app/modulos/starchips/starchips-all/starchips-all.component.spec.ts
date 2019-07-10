import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarchipsAllComponent } from './starchips-all.component';

describe('StarchipsAllComponent', () => {
  let component: StarchipsAllComponent;
  let fixture: ComponentFixture<StarchipsAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarchipsAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarchipsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
