import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {FormBuilder,FormGroup,FormControl,Validator} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  public userForm: FormGroup;

  constructor(
    public userapi: UserService,
    public fb: FormBuilder,
    public toastr: ToastrService
  ) {}

  ngOnInit() {
    this.userapi.GetUsersList();
    this.userForm();
  }

  userForm(){
    this.userForm = this.fb.group({
      firstName:[","]
    })
  }



}
