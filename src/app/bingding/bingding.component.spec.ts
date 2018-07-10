import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BingdingComponent } from './bingding.component';

describe('BingdingComponent', () => {
  let component: BingdingComponent;
  let fixture: ComponentFixture<BingdingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BingdingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BingdingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
