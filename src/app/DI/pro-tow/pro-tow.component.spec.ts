import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProTowComponent } from './pro-tow.component';

describe('ProTowComponent', () => {
  let component: ProTowComponent;
  let fixture: ComponentFixture<ProTowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProTowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProTowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
