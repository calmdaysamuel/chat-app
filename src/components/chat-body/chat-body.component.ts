import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AppService } from 'src/service/app.service';
import { FirestoreService } from 'src/service/firestore.service';

@Component({
  selector: 'chat-body',
  templateUrl: './chat-body.component.html',
  styleUrls: ['./chat-body.component.scss'],
})
export class ChatBodyComponent implements OnInit {
  roomId: string | null = '';
  private activatedRoute: ActivatedRoute;
  appService: AppService;
  elemRef: ElementRef;
  messages;
  constructor(
    activatedRoute: ActivatedRoute,
    firestore: FirestoreService,
    appService: AppService,
    elem: ElementRef
  ) {
    this.appService = appService;
    this.activatedRoute = activatedRoute;
    this.activatedRoute.paramMap.subscribe((map) => {
      this.roomId = map.get('id');
    });
    this.elemRef = elem;
    this.messages = firestore
      .getCollectionRef(`Rooms/${this.roomId}/Messages`)
      .valueChanges();

    this.messages = firestore.firestore
      .collection(`Rooms/${this.roomId}/Messages`, (ref) =>
        ref.orderBy('timestamp', 'asc')
      )
      .valueChanges() as Observable<any[]>;
  }

  ngOnInit() {}

  scrollToBottom(): void {
    try {
      this.elemRef.nativeElement.scrollTop =
        this.elemRef.nativeElement.scrollHeight;
    } catch (err) {}
  }
}
