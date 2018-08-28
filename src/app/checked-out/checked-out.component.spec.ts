import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckedOutComponent } from './checked-out.component';

describe('CheckedOutComponent', () => {
  let component: CheckedOutComponent;
  let fixture: ComponentFixture<CheckedOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckedOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckedOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
