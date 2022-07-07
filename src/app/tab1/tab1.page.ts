import { Component } from '@angular/core';
import { GlobalChatStorageService } from "../services/global-chat-storage.service";
import { Chat} from "../../models/chat model";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public chatDisplayTab1 = false;
  public chats = new Array<Chat>();

  constructor(protected globalChatStorageService: GlobalChatStorageService) {}

  startChat() {

    console.log("chat started")
    //hier zu tab 2 wechseln
  }

  public async viewChats(): Promise<void> {
    this.chatDisplayTab1 = true
    this.chats = await this.globalChatStorageService.get()

    console.log(this.chats)
  }
}
