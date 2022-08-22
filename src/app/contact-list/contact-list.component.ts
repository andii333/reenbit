import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactsService } from '../contacts.service';
import { FunctionsService } from '../functions.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  message: string;
  contacts: Contact[] ;
  contact: Contact ;
  letter:string ='';

  constructor(public service: ContactsService,
    public functions: FunctionsService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.service.contactList.subscribe(contacts => {this.contacts = contacts});
  } 

  openChat(contact:Contact) {
    this.contact = contact;
    this.service.chooseContact.next(contact);
    this.router.navigate(["contact-chat"])
    this.letter = '';
  }

  showContact(contact:Contact){
    if (this.letter.trim())  {
     return contact.name.toLowerCase().includes(this.letter.toLowerCase())
   } else {
     return true
   }
  }

}
