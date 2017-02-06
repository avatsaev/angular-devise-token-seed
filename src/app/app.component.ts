import { Component } from '@angular/core';
import {Angular2TokenService} from "angular2-token";
import {environment } from '../environments/environment'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  constructor(private tokenService: Angular2TokenService){
    tokenService.init(environment.token_auth_config);
  }
}
