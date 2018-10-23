import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, ToastController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-slider',
  templateUrl: 'slider.html',
})
export class SliderPage {

  @ViewChild(Slides) slides:Slides;
index = 1;
  constructor(private toast: ToastController, public navCtrl: NavController, public navParams: NavParams) {
  }

  
  // ionViewDidLoad() {
    
  //   setTimeout(() =>
   
  //   this.slides.slideTo(1, 1000),
  // this.newSetTimeOut(),
  
  //    5000);
      
  // }

  // newSetTimeOut(){
  //   setTimeout(() =>
   
  //   this.slides.slideTo(2, 1000),
   
  //    5000);
  // }
  
}
