import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactChatComponent } from './contact-chat/contact-chat.component';

const routes: Routes = [
  { path: 'contact-chat', component: ContactChatComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
