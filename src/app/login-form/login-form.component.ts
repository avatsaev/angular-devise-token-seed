import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';



@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  @Output() onLoginSuccess = new EventEmitter<any>();
  @Output() onLoginError = new EventEmitter<any>();

  loginData = {
    email: '',
    password: ''
  };


  constructor() {

  }

  ngOnInit() {
  }

  onSubmit(){

    console.log('login', this.loginData)

  }

}
