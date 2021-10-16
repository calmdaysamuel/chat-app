import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { AppService } from './app.service';
import * as fs from 'firebase/firestore';
@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  firestore: AngularFirestore;
  appService: AppService;
  constructor(firestore: AngularFirestore, appService: AppService) {
    this.firestore = firestore;
    this.appService = appService;
  }

  getCollectionRef(path: string): AngularFirestoreCollection {
    return this.firestore.collection(path);
  }

  getDocumentRef(path: string): AngularFirestoreDocument {
    return this.firestore.doc(path);
  }

  writeToCollection(path: string, message: string): void {
    this.firestore.collection(path).add({
      senderId: this.appService.username,
      message: message,
      timestamp: fs.Timestamp.now(),
    });
  }
}
