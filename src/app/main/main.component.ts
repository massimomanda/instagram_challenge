import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilityService } from '../utility.service';

import { comments } from '../models/interfaces';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  comments!: Array<comments>;
  commentsToggle = false;
  likeToggle = new Array(100).fill(false);
  storageLikes!: any;
  localStories!: any;

  constructor(public utility: UtilityService, public router: Router) {}

  ngOnInit(): void {
    // let jsonRes = localStorage.getItem('viewedStories');
    // this.localStories = jsonRes ? JSON.parse(jsonRes) : undefined;
    // console.log(this.localStories);

    // this.utility.checkCookies()
    if (localStorage.getItem('like') === null) {
      localStorage.setItem('like', JSON.stringify(this.likeToggle));
    }

    this.utility.getPosts().subscribe((elem) => {
      this.utility.posts = elem;
      console.log(elem);
    });

    this.utility.getUser().subscribe((param: any) => {
      param.forEach((el: any) => {
        el.viewed = false;
      });

      this.utility.users = param;
      if (localStorage.getItem('viewedStories') === null) {
        localStorage.setItem(
          'viewedStories',
          JSON.stringify(this.utility.users)
        );
      }

      this.localStories = JSON.parse(
        localStorage.getItem('viewedStories') || '{}'
      );
      this.utility.users = this.localStories;
      console.log(this.utility.users);
    });

    this.storageLikes = localStorage.getItem('like');
    this.storageLikes = JSON.parse(this.storageLikes);
    this.likeToggle = this.storageLikes;

    // localStorage.setItem('registeredUsers', JSON.stringify(this.utility.registeredUsers)); // salvo tutti gli utenti nel local storage quando si avvia

    console.log(this.utility.registeredUsers); // for test

    // if(this.utility.logged==false){
    //   window.alert("Fai log in per continuare")

    //   this.router.navigate(['', 'login']);
    // }
  }

  showComments(i: number) {
    this.commentsToggle = !this.commentsToggle;
    this.utility.getComments(i).subscribe((param) => {
      this.comments = JSON.parse(JSON.stringify(param));
      console.log(param);
    });
    console.log(this.commentsToggle);
    console.log(this.comments);
  }
  sendUser(index: number) {
    this.utility.currentUser = this.utility.users[index];

    console.log(this.utility.currentUser);
  }

  like(i: number) {
    this.likeToggle[i] = !this.likeToggle[i];
    localStorage.setItem('like', JSON.stringify(this.likeToggle));
  }
  removePost(index: number) {
    if (this.utility.admin) {
      this.utility.posts.splice(index, 1);
    }
  }
  deleteComment(index: number) {
    this.comments.splice(index, 1);
    console.log(index);
  }

  onStoryClick(e: any, i: any) {
    console.log(e.target, 'indice', i);
    // this.utility.users[i].viewed = true;
    this.localStories[i].viewed = true;

    localStorage.setItem('viewedStories', JSON.stringify(this.utility.users));
    console.log(this.utility.users);

    // let element = document.getElementsByClassName
    // let jsonRes = localStorage.getItem('viewedStories');
    // this.localStories = jsonRes ? JSON.parse(jsonRes) : undefined;
    // console.log(this.localStories);
  }
}
