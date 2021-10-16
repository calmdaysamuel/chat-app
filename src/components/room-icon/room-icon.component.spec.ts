/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RoomIconComponent } from './room-icon.component';

describe('RoomIconComponent', () => {
  let component: RoomIconComponent;
  let fixture: ComponentFixture<RoomIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RoomIconComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
