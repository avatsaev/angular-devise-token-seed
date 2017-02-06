import {Component, OnInit, Output, Input, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {


  @Input() isModal:boolean = false;
  @Output() onRegisterSuccess = new EventEmitter<any>();
  @Output() onRegisterError = new EventEmitter<any>();

  registerData = {
    email: null,
    password: null,
    password_confirmation: null
  };


  constructor() { }

  ngOnInit() {
  }


  onSubmit(){

    console.log('login', this.registerData)

  }

  passwordsMatch():boolean{
    return this.registerData.password_confirmation === this.registerData.password;
  }


}
