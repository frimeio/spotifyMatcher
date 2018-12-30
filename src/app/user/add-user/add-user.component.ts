import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {FormBuilder, FormGroup , FormControl, Validator} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {SpotifyService} from '../../spotify/spotify.service';

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
    public toastr: ToastrService,
    public spotapi: SpotifyService
  ) {}

  ngOnInit() {
  }

}
