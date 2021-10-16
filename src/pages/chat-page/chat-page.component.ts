import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/service/app.service';
import { FirestoreService } from 'src/service/firestore.service';
import { RoomsService } from 'src/service/rooms.service';
@Component({
  selector: 'chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss'],
})
export class ChatPageComponent implements OnInit {
  chatBox: string = '';
  roomId: string = '';
  roomName: string = '';
  private router: Router;
  private activatedRoute: ActivatedRoute;
  appService: AppService;
  firestore: FirestoreService;

  constructor(
    router: Router,
    activatedRoute: ActivatedRoute,
    firestore: FirestoreService,
    appService: AppService,
    roomsService: RoomsService
  ) {
    this.router = router;
    this.activatedRoute = activatedRoute;
    this.activatedRoute.paramMap.subscribe((map) => {
      this.roomId = map.get('id') ?? '';
    });
    this.appService = appService;
    this.firestore = firestore;

    this.roomName = roomsService.getRoomData(this.roomId)?.name ?? '';
  }

  ngOnInit() {}

  toExplorePage(): void {
    this.router.navigateByUrl('');
  }

  sendMessage(): void {
    if (this.chatBox.length > 0) {
      this.firestore.writeToCollection(
        `Rooms/${this.roomId}/Messages`,
        this.chatBox
      );
    }

    this.chatBox = '';
  }
}
