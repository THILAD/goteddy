import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Login',
  templateUrl: 'Login.page.html',
  styleUrls: ['Login.page.scss'],
})
export class LoginPage {
  constructor(private router: Router) {}

  changed() {
    this.router.navigate(['/profile-hotel']);
  }
}
