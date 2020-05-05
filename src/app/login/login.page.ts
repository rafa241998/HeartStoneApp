import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  elForm: any;  
   
  constructor(private fb: FormBuilder, private router: Router,public toastController: ToastController,) { 
    this.elForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password:['', Validators.required],
    });    
  }
  
  ngOnInit() {
  }

  doLogin(){    
      this.router.navigateByUrl('/start');
      this.toast();   
  }
  async toast() {
    const toast = await this.toastController.create({
      message: 'Bienvenido a mi APP',
      duration: 2000,
    });
    toast.present();
  }
}
