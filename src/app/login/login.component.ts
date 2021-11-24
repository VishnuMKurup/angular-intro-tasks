import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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


  constructor(private fb: FormBuilder,private auth: AuthService) {
    this.initLoginForm();
  }

  initLoginForm() {
    this.loginForm = this.fb.group({
      'email': ['', [Validators.required, customValidator.mailFormat]],
      'password': ['', [Validators.required]]
    });
  }



  submit() {
    this.submitted = true;
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      const creds = 'grant_type=password&password='
      + encodeURIComponent(this.loginForm.value['password']) + '&username=' + encodeURIComponent(this.loginForm.value['email']);
        console.log(creds);
        this.auth.onLogin(creds).subscribe(data => {
        }, error => {
          console.error('error caught in component');
          this.errorMessage = error;
          throw error;
        });
    }
  }

}
