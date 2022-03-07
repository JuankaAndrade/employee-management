import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate(username: string, password: string) {
    if (username === "admin" && password === "abc123") {
      sessionStorage.setItem('username', username)
      sessionStorage.setItem('type', "admin")
      return true;
    } 
    if (username === "user" && password === "abc123") {
      sessionStorage.setItem('username', username)
      sessionStorage.setItem('type', "user")
      return true;
    } 
    else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}
