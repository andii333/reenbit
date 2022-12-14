import { AfterContentChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { Contact } from '../contact';
import { ContactsService } from '../contacts.service';
import { FunctionsService } from '../functions.service';
import { Message } from './messages';

@Component({
  selector: 'app-contact-chat',
  templateUrl: './contact-chat.component.html',
  styleUrls: ['./contact-chat.component.css']
})
export class ContactChatComponent implements OnInit, AfterContentChecked {

  contact: Contact;
  messages: Message[] = [];
  message: string = "";
  res: any;

  constructor(public service: ContactsService,
    public functions: FunctionsService,
    private cdref: ChangeDetectorRef
  ) { }

  ngOnInit(): void {

    this.service.chooseContact.subscribe(contact => {
      this.contact = contact;

      this.messages = [];
      if (this.functions.getLocalStorage(this.contact.name)) {
        this.messages = this.functions.getLocalStorage(this.contact.name).map((m: any) => new Message(m.text, m.date, m.type));
      }
    }
    )
  }
  
  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }

  send() {
    if (this.message.trim()) {
      this.messages.push(new Message(this.message, new Date(), "white"));
      this.functions.toLocalStorage(`${this.contact.name}`, this.messages);
      this.message = "";
      this.service.updateContacts()
      this.functions.getAnswer(this.contact.name).pipe(delay(10000)).subscribe(answer => {
        if (answer.name === this.contact.name) {
          this.messages.push(new Message(answer.answer, new Date(), "dark"));
          this.functions.toLocalStorage(answer.name, this.messages);
        } else {
          let messages = [];
          if (this.functions.getLocalStorage(answer.name)) {
            messages = this.functions.getLocalStorage(answer.name).map((m: any) =>
              new Message(m.text, m.date, m.type));
          }
          messages.push(new Message(answer.answer, new Date(), "dark"));
          this.functions.toLocalStorage(answer.name, messages);
        }
        this.service.updateContacts()
      }
      )
    }
  }
}
