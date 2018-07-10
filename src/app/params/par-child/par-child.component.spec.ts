import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParChildComponent } from './par-child.component';

describe('ParChildComponent', () => {
  let component: ParChildComponent;
  let fixture: ComponentFixture<ParChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
