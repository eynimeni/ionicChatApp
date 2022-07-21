import {Message} from "./message model";

export interface Chat {
  messages: Array<Message>;
  time: string;
  date: string;
}
