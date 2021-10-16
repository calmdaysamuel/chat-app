import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatPageComponent } from 'src/pages/chat-page/chat-page.component';
import { ChatRoomExplorerComponent } from 'src/pages/chat-room-explorer/chat-room-explorer.component';

const routes: Routes = [
  { path: '', component: ChatRoomExplorerComponent },
  { path: 'room/:id', component: ChatPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
