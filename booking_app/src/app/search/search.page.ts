import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  constructor(
    
    private router: Router,
    public modalController: ModalController
    ) {}

  ngOnInit() {}

  searchDetail() {
    console.log('textttxtxt');
    this.router.navigate(['/hotel-list']);
    this.modalController.dismiss();

  }
closeMOdal(){
  this.modalController.dismiss()
}
}
