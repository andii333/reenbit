import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Contact } from './contact';
import { FunctionsService } from './functions.service';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  contactList: BehaviorSubject<Contact[]> = new BehaviorSubject<Contact[]>([]) 
  chooseContact: BehaviorSubject<Contact> = new BehaviorSubject<Contact>(new Contact());
  
  contacts: any [] = [
    { id: 0, name: "Alice Freeman", image:"src\assets\Alica Freman.jpg"},
    { id: 1, name: "Iniesta", image:"src\assets\Iniesta.jpg"},
    { id: 2, name: "Josefina", image:"src\assets\Josefina.jpg"},
    { id: 3, name: "Roberto", image:"src\assets\Roberto.jpg"},
    { id: 4, name: "Iryna Fedyshyn", image:"src\assets\Iryna Fedyshyn.jpg"},
    { id: 5, name: "Ronaldinho", image:"src\assets\Ronaldinho.jpg"},
    { id: 6, name: "Vakarchuk", image:"src\assets\Vakarchuk.jpg"},
    { id: 7, name: "Velazquez", image:"src\assets\Velazquez.jpg"},
  ]
  
  constructor(public functions:FunctionsService) {
    this.updateContacts()
   }

   updateContacts(){
     const contacts = this.contacts.map(contact => new Contact(contact))
     contacts.forEach(e => {
       if (this.functions.getLocalStorage(e.name)) {
         e.date = this.functions.getLocalStorage(e.name)[this.functions.getLocalStorage(e.name).length - 1].date;
         e.text = this.functions.getLocalStorage(e.name)[this.functions.getLocalStorage(e.name).length - 1].text;
        }
     });
     this.contactList.next(
contacts.sort((a, b) => {
       if (a.date > b.date) {
         return -1;
       }
       if (a.date < b.date) {
         return 1;
       }
       return 0;
     }
     )
     )  
   }
}
