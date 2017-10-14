import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { User } from './user';

@Injectable()
export class UserServiceService {
  // Local Reference
  userSource: User[] = [new User('DEV', 'Dev', 'Dev@outlook.com', 'Developer', 'Singapore'),
  new User('John', 'John', 'John@outlook.com', 'Analyst', 'Australia'),
  new User('Nathan', 'Nathan', 'Nathan@aol.com', 'Developer', 'USA')


  ];

  // FireDB URL
  private url = 'https://appuser-efc55.firebaseio.com/data.json';

  constructor(private http: Http) { }

  addUser(newUser: User) {
    return this.http.post(this.url, newUser);
    // console.log('data is added');
    // this.userSource.push(newUser);
    // this.userSource = this.userSource.slice();
    // console.log('source length' + this.userSource.length);


  }

  getUserList(): User[] {

    return this.userSource;

  }
  getUserListService(userId: number) {
    return this.http.get(this.url);
  }

  editUser(userId): User {
    ;
    return this.userSource[userId];

  }
  editUserData(editUser: User, userId: any) {

    this.userSource[userId].name = editUser.name;
  }



}
