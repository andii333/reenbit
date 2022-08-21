import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FunctionsService {

  constructor( private http: HttpClient) { }

  toLocalStorage(nameArrey:string, value:any ){
    localStorage.setItem(nameArrey, JSON.stringify(value))
  }
  
  getLocalStorage(event:string){
    return JSON.parse(localStorage.getItem(event) as string)
  }

getAnswer(name:string){
 return this.http.get("https://api.chucknorris.io/jokes/random")
   .pipe(map((res: any) => {return { answer:res.value,name}}))
  }
  
}
