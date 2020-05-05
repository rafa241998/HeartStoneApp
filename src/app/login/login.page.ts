import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  elForm: any;
  login = false;
  email: string;
  password: string;
  constructor(private fb: FormBuilder) { 
    this.elForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password:['', Validators.required],
    });
  }
  
  ngOnInit() {
  }

  doLogin(){
    this.login= !this.login;
      this.email = this.elForm.value.email;
      this.password = this.elForm.value.password;
  }
}
