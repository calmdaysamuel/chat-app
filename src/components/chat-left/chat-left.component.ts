import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'chat-left',
  templateUrl: './chat-left.component.html',
  styleUrls: ['./chat-left.component.scss'],
})
export class ChatLeftComponent implements OnInit {
  @Input()
  message: string = '';
  constructor() {}

  ngOnInit() {}
}
