import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilityService } from 'src/app/utility.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css'],
})
export class StoryComponent implements OnInit {
  constructor(public utility: UtilityService, private router: Router) {}
  @Input('id') id!: number;
  @Input('username') username!: string;



  ngOnInit(): void {}
}
