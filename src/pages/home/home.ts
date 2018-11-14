import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  arr = ['推荐','家居','餐厨','床上用品'];
  isActive = 0;
  isClick(i){
    this.isActive = i;
  }
  
  constructor(public navCtrl: NavController) {

  }

}
