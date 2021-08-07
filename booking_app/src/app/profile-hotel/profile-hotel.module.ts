import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileHotelPageRoutingModule } from './profile-hotel-routing.module';

import { ProfileHotelPage } from './profile-hotel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileHotelPageRoutingModule
  ],
  declarations: [ProfileHotelPage]
})
export class ProfileHotelPageModule {}
