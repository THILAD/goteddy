import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileHotelPage } from './profile-hotel.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileHotelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileHotelPageRoutingModule {}
