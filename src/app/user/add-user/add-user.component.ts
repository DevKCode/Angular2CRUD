import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { User } from '../../user';
import { UserServiceService } from '../../user-service.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  providers: [UserServiceService]

})
export class AddUserComponent implements OnInit {

  userAddform: FormGroup;
  userList: User[] = [];
  user: User;
  editStatus: boolean;
  pageTitle = 'Add User';
  buttonValue = 'Add User';
  paramId;


  constructor(private userService: UserServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.editStatus = false;
    if (this.route.snapshot.params['id']) {

      this.paramId = this.route.snapshot.params['id'];
      this.editStatus = true;
      this.buttonValue = 'Edit User';

      // Get the User from service
      // Edit Existing user

      this.user = this.userService.editUser(this.paramId);

      this.pageTitle = 'Edit User : ' + this.user.name;
      this.userAddform = new FormGroup({
        'username': new FormControl(this.user.name, [Validators.required]),
        'email': new FormControl(this.user.email, [Validators.required, Validators.email]),
        'job': new FormControl(this.user.job, [Validators.required]),
        // 'hobbies': new FormArray([]),
        'country': new FormControl(this.user.country, [Validators.required])
      });

    } else {
      // Add new User
      this.editStatus = false;
      this.buttonValue = 'Add User';
      this.userAddform = new FormGroup({
        'username': new FormControl('', [Validators.required]),
        'email': new FormControl('', [Validators.required, Validators.email]),
        'job': new FormControl('', [Validators.required]),
        // 'hobbies': new FormArray([]),
        'country': new FormControl('Select Country', [Validators.required])
      });
    }

  }

  onSubmit() {
    if (this.editStatus) {


      // Edit Form

      // Edit User Data
      this.user = new User(this.userAddform.get('username').value,
        this.userAddform.get('username').value,
        this.userAddform.get('email').value,
        this.userAddform.get('job').value,
        this.userAddform.get('country').value);

      // Edit Service send data
      this.userService.editUserData(this.user, this.paramId);
    } else {

      // Submit Form

      // New User
      this.user = new User(this.userAddform.get('username').value,
        this.userAddform.get('username').value,
        this.userAddform.get('email').value,
        this.userAddform.get('job').value,
        this.userAddform.get('country').value);

      // Add to UserService --Save

      this.userService.addUser(this.user).subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );

      // Reset the form
      this.userAddform.reset();
    }



  }


  // onAddHobby() {
  //   const control = new FormControl('new Data', [Validators.required]);
  //   (<FormArray>this.userAddform.get('hobbies')).push(control);
  // }


}
