import { Component, Input, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/utility.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css'],
})
export class StoryComponent implements OnInit {
  constructor(public utility: UtilityService) {}
  @Input('id') id!: number;
  @Input('username') username!: string;


  ngOnInit(): void {}
}
