/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChatRightComponent } from './chat-right.component';

describe('ChatRightComponent', () => {
  let component: ChatRightComponent;
  let fixture: ComponentFixture<ChatRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChatRightComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
