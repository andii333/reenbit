import { Component } from '@angular/core';
import { Message } from './contact-chat/messages';
import { FunctionsService } from './functions.service';
import { GoogleApiService } from './google-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reenbit';

  constructor(
    public functions: FunctionsService,
    private readonly google: GoogleApiService
    ) {
      this.addLocalstorage()
    }

    addLocalstorage(){
      const messages:Message [] = [];
      messages.push(new Message('Hello',new Date(), 'dark'))
      messages.push(new Message('Hi',new Date(), 'white'))
      messages.push(new Message('How are You?',new Date(), 'dark'))
      messages.push(new Message('I am good',new Date(), 'white'))
      this.functions.toLocalStorage('Alice Freeman', messages)
      this.functions.toLocalStorage('Iniesta', messages)
      this.functions.toLocalStorage('Roberto', messages)
    }
}
