import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'room-icon',
  templateUrl: './room-icon.component.html',
  styleUrls: ['./room-icon.component.scss'],
})
export class RoomIconComponent implements OnInit {
  @Input()
  name: string = '';

  @Input()
  description: string = '';
  constructor() {}

  ngOnInit() {}
}
