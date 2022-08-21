import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactChatComponent } from './contact-chat/contact-chat.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactsService } from './contacts.service';
import { FunctionsService } from './functions.service';
import { HttpClientModule } from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';

@NgModule({
  declarations: [
    AppComponent,
    ContactChatComponent,
    ContactListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    OAuthModule.forRoot(),
    AppRoutingModule
  ],
  providers: [FunctionsService, ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
