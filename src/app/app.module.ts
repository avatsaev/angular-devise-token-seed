import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Angular2TokenService} from "angular2-token";
import { ToolbarComponent } from './toolbar/toolbar.component';
import {AuthService} from "./services/auth.service";
import { LoginFormComponent } from './login-form/login-form.component';
import {RegisterFormComponent} from "./register-form/register-form.component";
import { AlertModule} from 'ng2-bootstrap/alert';
import { ModalModule } from 'ng2-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    LoginFormComponent,
    RegisterFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ModalModule.forRoot()
  ],
  providers: [Angular2TokenService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
