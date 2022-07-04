import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  //kapseln?
  public entireDate = new Date();
  public time = this.entireDate.toTimeString().slice(0,5)
  public date = this.entireDate.toDateString()

  public now = `on ${this.date} ${this.time}`;
  public titleVisible = false;

  inputValue: string = "";
  labelText: string= "";

  constructor() {}


  public sendMessage():void {
    this.titleVisible = !this.titleVisible
    console.log(this.entireDate.toDateString())
    console.log(this.entireDate.toTimeString())
    console.log(this.entireDate.toTimeString().slice(0,5))

    console.log(this.inputValue);
    this.labelText = this.inputValue;


  }



 /* public handleButtonClick():void {
    //this.title = 'New angular demo changed at' + new Date().toISOString();
    this.title = `New angular demo changed at ${new Date().toISOString()}`;
    this.subTitleVisible = !this.subTitleVisible;
  }*/


}
