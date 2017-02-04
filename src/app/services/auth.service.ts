import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Angular2TokenService} from "angular2-token";
import {Response} from "@angular/http";

@Injectable()
export class AuthService {

  private userLoggedInSubject = new BehaviorSubject<boolean>(this.userLoggedIn());
  userLoggedIn$ = this.userLoggedInSubject.asObservable();

  constructor(private tokenService: Angular2TokenService) {
    console.log("init auth service...");
  }

  emailSignIn(email, password):  Observable<Response>{

    let sub = this.tokenService.signIn({
      email:    email,
      password: password
    });

    sub.subscribe( () => this.userLoggedInSubject.next(true));

    return sub;


  }

  signUp(email, password, passwordConfirmation): Observable<Response>{

    return this.tokenService.registerAccount({
      email:                email,
      password:             password,
      passwordConfirmation: passwordConfirmation
    });

  }

  signOut(): Observable<Response>{

    let sub = this.tokenService.signOut();
    sub.subscribe( () => this.userLoggedInSubject.next(this.userLoggedIn()));

    return sub;
  }

  userLoggedIn():boolean{
    return this.tokenService.userSignedIn();
  }



}
