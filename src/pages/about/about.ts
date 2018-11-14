import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, public navParams:NavParams) {

  }
  close(){
    this.navCtrl.pop();
  }
  ionViewDidLoad(){
    console.log('ionViewDidLoad AboutPage');
  }

}
