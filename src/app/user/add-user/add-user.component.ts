import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {FormBuilder, FormGroup , FormControl, Validator} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {SpotifyService} from '../../spotify/spotify.service';
import {User} from '../user.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  public userForm: FormGroup;

  constructor(
    public _userService: UserService,
    public spotapi: SpotifyService
  ) {}

  ngOnInit() {
    this._userService.GetUsersList();
  }

}
