import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { SearchPage } from "../search/search.page";
@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {

  constructor( 
    private router:Router,
    public modalController: ModalController
  ) { }

  ngOnInit() {
  }

 async search(){
 
      const modal = await this.modalController.create({
        component: SearchPage,
        cssClass: 'my-custom-class'
      });
      return await modal.present();

  }

//   routers(){
// this.router.navigate(['/hotel-list'])
//   }
}
