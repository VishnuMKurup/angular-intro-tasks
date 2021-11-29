import { LocationStrategy } from '@angular/common';
import { AfterViewChecked, Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(public router: Router) { }


  onLogOut() {
    sessionStorage.removeItem('refresh_token');
    this.router.navigate(['']);
  }

}
