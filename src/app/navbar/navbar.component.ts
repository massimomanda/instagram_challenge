import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UtilityService } from '../utility.service';
import { posts } from '../models/interfaces';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

  search = new FormControl('')

  constructor(public utility:UtilityService) { }

  ngOnInit(): void {
    this.search.valueChanges.subscribe((searchRes)=>{
      if(searchRes.length>=3 ){
        this.utility.getPostFilteredBySearch().subscribe((res)=>{
          this.utility.posts = res
          this.utility.posts = this.utility.posts.filter((element:posts)=>{
            if (element.title.includes(searchRes)||(element.body.includes(searchRes)) ){
              return true
            }
            else{
              return false
            }
          })
          
        })
      }
    })
    
  }

  onClickLogout(){
    this.utility.logout()
    
  }

}
