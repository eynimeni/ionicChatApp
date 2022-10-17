import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage-angular";
import {Message} from "../../models/message model";
import {Chat} from "../../models/chat model";

@Injectable({
  providedIn: 'root'
})
export class GlobalChatStorageService {

  private storageKey = 'globalChatMessages'

  constructor(protected storage: Storage) { }

  public save(messages: Array<Chat>): Promise<any>{
    return this.storage.set(this.storageKey, messages)
  }

  public get(): Promise<Array<Chat>> {
    return this.storage.get(this.storageKey)
  }

}
