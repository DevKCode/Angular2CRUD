import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserServiceService]
})
export class UserComponent implements OnInit {
  userSource: User[];


  constructor(private userService: UserServiceService, private router: Router) { }

  ngOnInit() {

    this.userSource = this.userService.getUserList();
  }

  addUserLink() {

    this.router.navigate(['/user']);
  }
  onEditUser(userId) {
    this.router.navigate(['/user', userId]);
  }


}
