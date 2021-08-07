import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-profile-hotel',
  templateUrl: './profile-hotel.page.html',
  styleUrls: ['./profile-hotel.page.scss'],
})
export class ProfileHotelPage implements OnInit {





  constructor(private router:Router

  ) { }
  ngOnInit() {

  }
  booknow(){
    this.router.navigate(['/booknow'])
  }
}
