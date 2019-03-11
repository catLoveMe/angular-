/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FaderAnimComponent } from './fader-anim.component';

describe('FaderAnimComponent', () => {
  let component: FaderAnimComponent;
  let fixture: ComponentFixture<FaderAnimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaderAnimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaderAnimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
