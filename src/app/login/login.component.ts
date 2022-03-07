import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username = ''
  public password = ''
  invalidLogin = false

  constructor(private router: Router,
    private loginservice: AuthenticationService) { }

  ngOnInit() {
  }

  checkLogin() {

    if (this.loginservice.authenticate(this.username, this.password)
    ) {
        let type = sessionStorage.getItem('type');
          if(type == "admin")
            this.router.navigate([''])
          else
            this.router.navigate(['user'])
      this.invalidLogin = false
    } else
      this.invalidLogin = true
  }

}
