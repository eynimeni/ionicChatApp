import { Component } from '@angular/core';
import { CurrentChatStorageService} from "../services/current-chat-storage.service";
import { GlobalChatStorageService } from "../services/global-chat-storage.service";
import {Message} from "../../models/message model";
import {Chat} from "../../models/chat model";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public entireDate = new Date();
  public time = this.entireDate.toTimeString().slice(0,5)
  public date = this.entireDate.toDateString()

  public now = `started on ${this.date} ${this.time}`;
  public sendButtonVisible = false;

  inputValue: string = "";
  labelText: string= "";

  public messages = new Array<Message>();
  public chats = new Array<Chat>();

  currentChat: Array<Message> = [];


  constructor(protected currentChatStorageService: CurrentChatStorageService,
              protected globalChatStorageService: GlobalChatStorageService) {
  }

  public sendMessage():void {
    this.sendButtonVisible = true
    this.saveMessage();
  }

  public async saveMessage(): Promise<void> {
    this.messages.push({text: this.inputValue, time: this.time})
    await this.currentChatStorageService.save(this.messages);
    this.currentChat = await this.currentChatStorageService.get()
    console.log(this.currentChat);
  }


  public async saveChat(): Promise<void> {
    this.chats.push({messages: this.currentChat, date: this.date, time: this.time})
    await this.globalChatStorageService.save(this.chats);
    const result = await this.globalChatStorageService.get()
    console.log(result)
  }

 public emptyChat(): void {
  this.messages.splice(0)
  }
}
