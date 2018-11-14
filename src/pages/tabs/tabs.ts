import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ShopPage } from '../shop/shop';
import { IdeaPage } from '../idea/idea';

import { NavController, ModalController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ShopPage;
  //tab3Root = AboutPage;
  tab4Root = IdeaPage;
  tab5Root = ContactPage;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public navParams: NavParams) {

  }
  ionViewDidLoad(){
    document.querySelector('#tab-t0-2').addEventListener('click',()=>{
      let profileModal = this.modalCtrl.create(AboutPage);
      profileModal.present();
    },false)
  }
}
