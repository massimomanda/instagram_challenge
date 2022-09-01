import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { roles } from './shared/constants';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  // our users json
  registeredUsers = [
    { userName: 'acapuano', password: 'Qwerty1234', role: roles.ADMIN },
    { userName: 'mmanda', password: 'mmanda', role: roles.USER },
    { userName: 'lrusso', password: 'lrusso', role: roles.USER },
  ];

  currentUser!: any;

  logged = false; // logged flag

  users!: any;

  posts!: any; // where our posts are stored

  admin = false;

  constructor(
    private cookies: CookieService,
    public router: Router,
    private http: HttpClient
  ) {
    // this.registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')||'[]') ;
  }

  getPostFilteredBySearch() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
  getComments(id: number) {
    return this.http.get(
      'https://jsonplaceholder.typicode.com/posts/' + id + '/comments'
    );
  }
  getUser() {
    return this.http.get('https://jsonplaceholder.typicode.com/users/');
  }

  login(user: string, password: string) {
    const oneMinute = 60000; // milliseconds
    const expires = new Date(
      new Date().getTime() + 30 * oneMinute
    ).toUTCString(); // times to expires cookie
    this.currentUser = this.registeredUsers.find(
      (item) => item.userName == user && item.password == password
    ); // where the current user is saved

    // console.log(JSON.stringify( localStorage.getItem('userName')) )
    // const registeredUsersNew = localStorage.getItem
    // this.currentUser = JSON.parse(localStorage.getItem('registeredUsers')).find(item => item.userName == user && item.password == password)
    // console.log(registeredUsersNew(user))

    // || userNameCookie == "acapuano" && passwordCookie == "Querty1234" || userNameCookie == "mmanda" && passwordCookie == "mmanda"
    // checkUserCookie =

    // if(this.currentUser ){ // if current user exist log in
    //   console.log("Login effettuato")
    //   document.cookie=`username=${user};expires=${expires};path=/`;
    //   document.cookie=`password=${password};expires=${expires};path=/`;
    //   this.router.navigate(['', 'main']); // redirect to the homepage
    //   window.alert("Login ok benvenuto "+user); // a wellcome notification
    //   this.logged = !this.logged // logged flag

    // }
    // else{window.alert("User o password errata")}// notification if the user or password is wrong
  }

  //   checkCookies(){
  //     const userNameCookie = this.cookies.get('username')
  //     const passwordCookie = this.cookies.get('password')

  //     if(this.registeredUsers.find(item => item.userName == userNameCookie && item.password == passwordCookie)){
  //       this.logged=true
  //       this.admin=false

  //       window.alert("bentornato "+userNameCookie)
  //     }
  //     if(this.registeredUsers.find(item => item.userName == userNameCookie && item.password == passwordCookie && item.role=="admin")){
  //       this.logged=true
  //       this.admin=true

  //       window.alert("bentornato Admin "+userNameCookie)
  //     }
  //   }
  //   logout(){
  //     this.cookies.deleteAll()
  //     window.alert("Logout Effettuato con successo")
  //     this.logged=false
  //     this.router.navigate(['', 'login']); // redirect to the homepage
  //   }
}
