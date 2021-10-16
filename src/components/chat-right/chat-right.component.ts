import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'chat-right',
  templateUrl: './chat-right.component.html',
  styleUrls: ['./chat-right.component.scss'],
})
export class ChatRightComponent implements OnInit {
  @Input()
  message: string = '';
  constructor() {}

  ngOnInit() {}
}
