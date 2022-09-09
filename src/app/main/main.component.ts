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
  
    if (localStorage.getItem('like') === null) {
      localStorage.setItem('like', JSON.stringify(this.likeToggle));
    }

    this.utility.getPosts().subscribe((elem) => {
      this.utility.posts = elem;
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
    });

    this.storageLikes = localStorage.getItem('like');
    this.storageLikes = JSON.parse(this.storageLikes);
    this.likeToggle = this.storageLikes;



    
  }

  showComments(i: number) {
    this.commentsToggle = !this.commentsToggle;
    this.utility.getComments(i).subscribe((param) => {
      this.comments = JSON.parse(JSON.stringify(param));
    });
  }
  sendUser(index: number) {
    this.utility.currentUser = this.utility.users[index];

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
  }

  onStoryClick(e: any, i: any) {
    this.localStories[i].viewed = true;

    localStorage.setItem('viewedStories', JSON.stringify(this.utility.users));

  
  }
}
