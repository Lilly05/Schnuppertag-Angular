import { Injectable } from '@angular/core';
import {LoginPerson} from "../entities/login-person";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: LoginPerson= {username: '', password: ''};

  users: LoginPerson[] = [
    {username: 'Chantal', password: '1234'},
    {username: 'Fredi', password: '1234'},
    {username: 'Julienne', password: 'passwort12'},
    {username: 'Nora', password: 'passwort12'},
    {username: 'Laura', password: 'idk45'}
    ];

  constructor() { }
}
