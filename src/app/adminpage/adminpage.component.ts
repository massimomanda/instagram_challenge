import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {

  constructor(public utility:UtilityService) {

   }

  ngOnInit(): void {
    //
  }

  removeUser(index:number){
    this.utility.registeredUsers.splice(index,1)
  }

}
