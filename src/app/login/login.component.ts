import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators, FormBuilder, FormGroup} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isLogin: boolean = this.router.url === '/login';

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) {
                if (this.authService.isLoggedIn) {
                  this.router.navigate(['todo']);
                }
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  login() {
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password);
  }

  create() {
    this.authService.createUser(this.loginForm.value.email, this.loginForm.value.password);
  }

}
