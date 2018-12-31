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



  getData(){
    this.usersRef = this.db.list('usersRef');
    return this.usersRef;
  }
  // Create User
  AddUser(id: string, favArtist: string, email: string) {
    if (!this.usersRef) {
      console.log('UsersRef is undefined!');
      this.usersRef = this.getData();
    }

    this.usersRef.push({
      id: id,
      email: email,
      favArtist: favArtist,
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

  DeleteUser(id: string) {
    this.userRef = this.db.object('users-list/' + id);
    this.usersRef.remove();
  }
}
