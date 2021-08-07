import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-booknow',
  templateUrl: './booknow.page.html',
  styleUrls: ['./booknow.page.scss'],
})
export class BooknowPage implements OnInit {
  constructor(
    public loadingController: LoadingController,
    public alertController: AlertController,
     private router:Router
  ) {}

  ngOnInit() {}

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'ກຳລັງຈອງ...',
      duration: 2000,
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
    this.presentAlert();
  }

  async presentAlert() {
    console.log('dffdsfsf');

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'ສຳເລັດ',
      // subHeader: 'Subtitle',
      message: 'ກັບໄປສູ່ໜ່າຫຼັກ',
      buttons: ['ຕົກລົງ'],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
