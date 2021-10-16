import { Injectable } from '@angular/core';
import {
  DocumentData,
  QueryDocumentSnapshot,
} from '@angular/fire/compat/firestore';
import { FirestoreService } from './firestore.service';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  rooms: QueryDocumentSnapshot<DocumentData>[];
  constructor(firestoreService: FirestoreService) {
    firestoreService
      .getCollectionRef('Rooms')
      .get()
      .subscribe((data) => {
        this.rooms = data.docs;
      });
    this.rooms = [];
  }

  getRoomData(id: string) {
    for (let room = 0; room < this.rooms.length; room++) {
      if (this.rooms[room].id == id) {
        console.log('yea');
        return this.rooms[room].data();
      }
    }

    return null;
  }
}
