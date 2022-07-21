import {Component} from '@angular/core';
import { GlobalChatStorageService } from "../services/global-chat-storage.service";
import { Chat} from "../../models/chat model";
import {IonTabs} from "@ionic/angular";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page{
  public chats = new Array<Chat>();

  constructor(protected globalChatStorageService: GlobalChatStorageService, protected tab: IonTabs) {
  }

  public startChat(): void {
    this.tab.select("tab2");
  }

  public async viewChats(): Promise<void> {
    this.chats = await this.globalChatStorageService.get()
  }
}
