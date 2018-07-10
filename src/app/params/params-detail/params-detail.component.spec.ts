import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamsDetailComponent } from './params-detail.component';

describe('ParamsDetailComponent', () => {
  let component: ParamsDetailComponent;
  let fixture: ComponentFixture<ParamsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParamsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
