import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChatBodyComponent } from 'src/components/chat-body/chat-body.component';
import { ChatLeftComponent } from 'src/components/chat-left/chat-left.component';
import { ChatRightComponent } from 'src/components/chat-right/chat-right.component';
import { RoomIconComponent } from 'src/components/room-icon/room-icon.component';
import { ChatPageComponent } from 'src/pages/chat-page/chat-page.component';
import { ChatRoomExplorerComponent } from 'src/pages/chat-room-explorer/chat-room-explorer.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { FormsModule, NgModel, NgModelGroup } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ChatPageComponent,
    ChatLeftComponent,
    ChatRightComponent,
    ChatBodyComponent,
    ChatRoomExplorerComponent,
    RoomIconComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
