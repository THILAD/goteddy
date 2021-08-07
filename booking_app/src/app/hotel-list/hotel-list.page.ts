import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.page.html',
  styleUrls: ['./hotel-list.page.scss'],
})
export class HotelListPage implements OnInit {

  constructor( public router:Router) { }

  ngOnInit() {
  }
changerouter(){
  this.router.navigate(['/profile-hotel'])
}
}
