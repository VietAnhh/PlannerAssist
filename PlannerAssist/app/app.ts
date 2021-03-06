import { Component } from '@angular/core';
import { ionicBootstrap, Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import {TabsComponent} from "./pages/tabs/tabs.component";
import {SimpleHome} from "./providers/SimpleHome";
import {SimpleTask} from "./providers/SimpleTask";
import {SimpleSaved} from "./providers/SimpleSaved";
import {TestDB} from "./providers/TestDB";

declare var window;
@Component({
  providers: [SimpleSaved, SimpleTask, SimpleHome, TestDB],
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {
  rootPage: any = TabsComponent;

  constructor(public platform: Platform) {
    platform.ready().then(() => {


      if (window.cordova && window.cordova.plugins.Keyboard) {
        window.cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
        // solves screen bouncing on form input
        // since I am using JS Scroll
        window.cordova.plugins.Keyboard.disableScroll(true);
      }


      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.


      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp,[],{
  iconMode: "md",
  scrollAssist: false,
  autoFocusAssist: false
});
