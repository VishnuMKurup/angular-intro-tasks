import { Component, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { customValidator } from '../shared/custom-validator/custom.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  submitted: boolean;
  loginForm: FormGroup;
  errorMessage: any;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.initLoginForm();
  }

  initLoginForm() {
    this.loginForm = this.fb.group({
      'email': ['', [Validators.required, customValidator.mailFormat]],
      'password': ['', [Validators.required]]
    });
  }

  submit() {
    localStorage.setItem('refresh_item', null);
    this.submitted = true;
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      const creds = 'grant_type=password&password='
        + encodeURIComponent(this.loginForm.value['password']) + '&username=' + encodeURIComponent(this.loginForm.value['email']);
      this.auth.onLogin(creds).subscribe(data => {
       sessionStorage.setItem('refresh_token', data['refresh_token']);
        this.router.navigate(['/task']);
      }, error => {
        console.error('error caught in component');
        this.errorMessage = error;
        throw error;
      });
    }
  }

}
