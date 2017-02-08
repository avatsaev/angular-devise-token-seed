import {Component, OnInit, Input} from '@angular/core';
import {MdDialogRef} from "@angular/material";

@Component({
  selector: 'app-auth-dialog',
  templateUrl: './auth-dialog.component.html',
  styleUrls: ['./auth-dialog.component.css']
})
export class AuthDialogComponent implements OnInit {

  authMode: 'register' | 'login';

  constructor() { }

  ngOnInit() {
  }

  isLoginMode(){
    return this.authMode == 'login';
  }

}
