import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },

  // {
  //   path: '',
  //   loadChildren: () =>
  //     import('./auth/login/login-routing.module').then((m) => m.LoginPageRoutingModule),
  // },

  {
    path: 'booking',
    loadChildren: () =>
      import('./booking/booking.module').then((m) => m.BookingPageModule),
  },

  {
    path: 'search',
    loadChildren: () =>
      import('./search/search.module').then((m) => m.SearchPageModule),
  },
  {
    path: 'profile-hotel',
    loadChildren: () =>
      import('./profile-hotel/profile-hotel.module').then(
        (m) => m.ProfileHotelPageModule
      ),
  },
  {
    path: 'hotel-list',
    loadChildren: () =>
      import('./hotel-list/hotel-list.module').then(
        (m) => m.HotelListPageModule
      ),
  },
  {
    path: 'booknow',
    loadChildren: () =>
      import('./booknow/booknow.module').then((m) => m.BooknowPageModule),
  },
  {
    path: 'book-history',
    loadChildren: () =>
      import('./book-history/book-history.module').then(
        (m) => m.BookHistoryPageModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./auth/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./auth/register/register.module').then(
        (m) => m.RegisterPageModule
      ),
  },
  {
    path: 'resetpassword',
    loadChildren: () =>
      import('./auth/resetpassword/resetpassword.module').then(
        (m) => m.ResetpasswordPageModule
      ),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
