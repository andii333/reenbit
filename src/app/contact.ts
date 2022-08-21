export class Contact{
id:number;
name:string;
image:string;
date:string;
text:string;

constructor(item?:any){
this.id = item? item["id"] : null;
    this.name = item ? item["name"] : '';
    this.image = item ? item["image"] : '';
this.date = '';
this.image = '';
}

}