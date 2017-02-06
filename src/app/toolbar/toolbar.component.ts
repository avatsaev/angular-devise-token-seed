import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {ModalDirective} from "ng2-bootstrap";


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.sass']
})
export class ToolbarComponent implements OnInit {

  @ViewChild('loginModal') public loginModal:ModalDirective;


  constructor(protected authService:AuthService) { }

  ngOnInit() {
  }

  openLoginModal() {

    this.loginModal.show();

  }


  openRegisterModal() {

  }


}
