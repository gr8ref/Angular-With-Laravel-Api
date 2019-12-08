import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  errorMessage: string;
  username: any;
  password: any;
  auth_token: any;
  email: any;

  constructor(private formBuilder: FormBuilder, private router: Router, private ApiService: ApiService) {
      
    
  }

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
          email: ['', Validators.required],
          password: ['', Validators.required]
      });
  }

  get f() {
      return this.loginForm.controls;
  }

  onSubmit() {

      this.ApiService.getAuth('refik@umisoft.ba', 'secret')

      .subscribe((response: any) => {
        this.auth_token = response.token;
        localStorage.setItem("auth_token", this.auth_token);
        localStorage.setItem("user", JSON.stringify(response.user));
        this.ApiService.getToken(this.auth_token); 
        //console.log(response.user);

        this.router.navigate(['/home']);
      }, () => {
        console.log('Error', )
        this.router.navigate(['/login']);
      });

  }
}
