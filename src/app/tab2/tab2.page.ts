import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public title = 'Chat';
  public subTitle = `von ${new Date().toISOString()}`;
  public titleVisible = false;
  //public names = ['Max Mustermann', 'John Doe', 'Jane Doe', 'Hans Wurst', 'Frederike Feuerrot'];

  constructor() {}

  public sendMessage():void {
    this.titleVisible = !this.titleVisible
  }

 /* public handleButtonClick():void {
    //this.title = 'New angular demo changed at' + new Date().toISOString();
    this.title = `New angular demo changed at ${new Date().toISOString()}`;
    this.subTitleVisible = !this.subTitleVisible;
  }*/
}
