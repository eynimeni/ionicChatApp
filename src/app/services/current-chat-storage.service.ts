import { Injectable } from '@angular/core';
import {Storage} from "@ionic/storage-angular";
import {Message} from "../../models/message model";


@Injectable({
  providedIn: 'root'
})
export class CurrentChatStorageService {

  private storageKey = 'currentChatMessages'

  constructor(protected storage: Storage) { }

  public save(messages: Array<Message>): Promise<any>{
    return this.storage.set(this.storageKey, messages)
  }

  public get(): Promise<Array<Message>> {
    return this.storage.get(this.storageKey)
  }

}
