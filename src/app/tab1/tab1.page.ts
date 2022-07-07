import { Component } from '@angular/core';
import { GlobalChatStorageService } from "../services/global-chat-storage.service";
import { Chat} from "../../models/chat model";
import {Route} from "@angular/router";
import {Tab2Page} from "../tab2/tab2.page";
import {IonTabs} from "@ionic/angular";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public chats = new Array<Chat>();

  constructor(protected globalChatStorageService: GlobalChatStorageService, protected tab: IonTabs) {}

  startChat() {
    this.tab.select("tab2");

  }

  public async viewChats(): Promise<void> {
    this.chats = await this.globalChatStorageService.get()

    console.log(this.chats)

    //todo Beim Auswählen eines vergangenen Chats, sieht man den gesamten Verlauf
    //momentan wird noch nicht ausgewählt
  }
}
