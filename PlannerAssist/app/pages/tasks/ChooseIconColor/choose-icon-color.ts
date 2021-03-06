import { Component } from '@angular/core';
import {ViewController, ModalController, NavParams} from 'ionic-angular';
import {IconList} from "../IconList/icon-list";

declare var TweenLite;
declare var Circ;

@Component({
  template: `

<ion-header>
  <ion-toolbar>
    <ion-title id="add-task-title">Icon's Color</ion-title>
    <ion-buttons>
      <button class="scan-button" ion-button icon-only (click)="GoBack()">Back</button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>


<ion-content class="choose-icon-color-container">

  <div class="icon-top">
    <ion-icon id="mainIcon" *ngIf="icon" style="color: #E4004F" class="icon-array-list" name="{{icon}}" color="primary"></ion-icon>
  </div>

  <ion-row>
    
    <ion-col>
      <div id="A1" #A1 ion-button tappable (click)="setColor(A1, 'E4004F')" class="color-square" style="background-color: #E4004F;border: 2px solid #FFF"></div>    
    </ion-col>
    
    <ion-col>
      <div #A2 ion-button tappable (click)="setColor(A2, 'F39801')"  class="color-square" style="background-color: #F39801" ></div>    
    </ion-col>
    
    <ion-col>
      <div #A3 ion-button tappable (click)="setColor(A3, '019E97')" class="color-square" style="background-color: #019E97"></div>    
    </ion-col>
    
    <ion-col>
      <div #A4 ion-button tappable (click)="setColor(A4, '00A0E8')" class="color-square" style="background-color: #00A0E8"></div>    
    </ion-col>
    
    <ion-col>
      <div #B1 ion-button tappable (click)="setColor(B1, 'E82200')" class="color-square" style="background-color: #E82200"></div>    
    </ion-col>
    
    <ion-col>
      <div #B2 ion-button tappable (click)="setColor(B2, '42FF9D')" class="color-square" style="background-color: #42FF9D"></div>    
    </ion-col>
    
    <ion-col>
      <div #B3 ion-button tappable (click)="setColor(B3, 'FB946E')" class="color-square" style="background-color: #FB946E"></div>    
    </ion-col>
    
    <ion-col>
      <div #B4 ion-button tappable (click)="setColor(B4, 'F4FFE4')" class="color-square" style="background-color: #F4FFE4"></div>    
    </ion-col>
  </ion-row>
  
  
  <button block ion-button tappable (click)="submitColor()" color="primary">Next</button>

</ion-content>


`,
})
export class ChooseIconColor {

  icon;
  mainIcon;
  currentBorder;
  currentColor;

  constructor(public viewCtrl: ViewController, public modalCtrl: ModalController, public params: NavParams) {

    this.icon = params.get('icon');
    console.log(this.icon);


  }


  ionViewDidEnter(){

    this.currentBorder = window.document.getElementById("A1");
    console.log(this.currentBorder);

    this.currentColor= "E4004F";


    this.mainIcon = window.document.getElementById("mainIcon");
    // this.mainIcon.style.color = "#E4004F";

  }

  setColor(square, color){
    this.mainIcon.style.color = `#${color}`;
    this.currentBorder.style.border = "";
    this.currentBorder = square;
    this.currentBorder.style.border = "2px solid #FFF";
    this.currentColor = color;



  }

  GoBack(){
    this.viewCtrl.dismiss();
  }

  submitColor(){
    // console.log(this.finalSub);
    console.log(this.icon);
    console.log(this.currentColor);

    let data = {
      icon: this.icon,
      color: this.currentColor
    };

    this.viewCtrl.dismiss(data);
  }


}
