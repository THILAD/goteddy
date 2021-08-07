import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookHistoryPageRoutingModule } from './book-history-routing.module';

import { BookHistoryPage } from './book-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookHistoryPageRoutingModule
  ],
  declarations: [BookHistoryPage]
})
export class BookHistoryPageModule {}
