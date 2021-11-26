import { LocationStrategy } from '@angular/common';
import { AfterViewChecked, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewChecked {
  isLogIn: boolean;

  constructor(private router: Router, private location: LocationStrategy) { }

  ngAfterViewChecked() {
    if (this.location.path().includes('/login')) {
      return this.isLogIn = true;
    } else {
      return this.isLogIn = false;
    }
  }

  onLogOut() {
    sessionStorage.removeItem('refresh_token');
    this.router.navigate(['']);
  }

}
