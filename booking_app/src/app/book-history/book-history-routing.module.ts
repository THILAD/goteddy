import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookHistoryPage } from './book-history.page';

const routes: Routes = [
  {
    path: '',
    component: BookHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookHistoryPageRoutingModule {}
