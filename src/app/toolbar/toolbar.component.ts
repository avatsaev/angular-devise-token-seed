import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";

import {MdDialog, MdDialogRef} from '@angular/material';
import {AuthDialogComponent} from "../auth-dialog/auth-dialog.component";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.sass']
})
export class ToolbarComponent implements OnInit {

  constructor(
      protected authService:AuthService,
      public dialog: MdDialog
  ){}

  ngOnInit() {
  }

  openAuthModal(mode:"register" | "login" = "login") {

    let authDialogRef = this.dialog.open(AuthDialogComponent);
    authDialogRef.componentInstance.authMode = mode;


    // this.authDialog.authMode = mode;

  }


  openRegisterModal() {

  }


}
