import { Injectable } from '@angular/core';
import { User } from './user.model';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  usersRef: AngularFireList<any>;    // Reference to Student data list, its an Observable
  userRef: AngularFireObject<any>;   // Reference to Student object, its an Observable too

  // Inject AngularFireDatabase Dependency in Constructor
  constructor(private db: AngularFireDatabase) { }

  // Create User
  AddUser(user: User) {
    this.usersRef.push({
      id: user.$id,
      username: user.username,
      email: user.email,
      favartist: user.favartist
    });
  }

  GetUser(id: string) {
    this.userRef = this.db.object('users-list/' + id);
    return this.userRef;
  }

  GetUsersList() {
    this.usersRef = this.db.list('users-list');
    return this.usersRef;
  }

  UpdateUser(user: User) {
    this.userRef.update({
      id: user.$id,
      username: user.username,
      email: user.email,
      favartist: user.favartist
    });
  }

  DeleteUser(id: string) {
    this.userRef = this.db.object('users-list/' + id);
    this.usersRef.remove();
  }
}
