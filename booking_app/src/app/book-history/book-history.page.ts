import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-history',
  templateUrl: './book-history.page.html',
  styleUrls: ['./book-history.page.scss'],
})
export class BookHistoryPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  changed(){
    this.router.navigate(['/profile-hotel'])
  }

}
