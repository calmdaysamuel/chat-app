import { Component, OnInit } from '@angular/core';
import {
  DocumentData,
  QueryDocumentSnapshot,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppService } from 'src/service/app.service';
import { RoomsService } from 'src/service/rooms.service';

@Component({
  selector: 'chat-room-explorer',
  templateUrl: './chat-room-explorer.component.html',
  styleUrls: ['./chat-room-explorer.component.scss'],
})
export class ChatRoomExplorerComponent implements OnInit {
  private router: Router;
  appService: AppService;
  roomsService: RoomsService;
  constructor(
    router: Router,
    appService: AppService,
    roomsService: RoomsService
  ) {
    this.router = router;
    this.appService = appService;
    this.roomsService = roomsService;
  }

  ngOnInit() {}

  goToRoom(id: string): void {
    this.router.navigateByUrl(`room/${id}`);
  }
}
