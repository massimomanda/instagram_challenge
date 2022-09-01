import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {
  imgs = new Array(100)
  
  constructor(public utility: UtilityService) { }

  ngOnInit(): void {
  }

}
