/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChatLeftComponent } from './chat-left.component';

describe('ChatLeftComponent', () => {
  let component: ChatLeftComponent;
  let fixture: ComponentFixture<ChatLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChatLeftComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
