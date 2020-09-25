import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LoginPerson} from "../entities/login-person";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: LoginPerson = { username: '', password: '' };

  hasError = false;

  constructor(private router: Router, public userservice: UserService) {
  }

  isValid() {
    if (this.user.username !== '' && this.user.password !== '') {
      if (this.validateuser()) {
        this.hasError = false;
        this.userservice.user = this.user;
        this.router.navigateByUrl('/home');
      }
    }
    else if (this.user.username === '' || this.user.password === '') {
      this.hasError = true;
    }
  }

  private validateuser() {
    let valid = false;
    this.userservice.users.forEach(user => {
      if (this.user.username === user.username) {
        if (this.user.password === user.password) {
          valid = true;
        } else if (this.user.password !== user.password){
          valid = false;
        }
      }
    });

    return valid;
  }

}
