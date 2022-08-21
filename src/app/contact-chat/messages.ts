export class Message {
    text: string;
    date: Date;
    type: string;

    constructor(text: string, date: Date, type: string) {
    this.text = text;
    this.date = date;
    this.type = type;
    }
}