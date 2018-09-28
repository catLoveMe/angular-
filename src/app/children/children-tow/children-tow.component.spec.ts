import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenTowComponent } from './children-tow.component';

describe('ChildrenTowComponent', () => {
  let component: ChildrenTowComponent;
  let fixture: ComponentFixture<ChildrenTowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildrenTowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildrenTowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
