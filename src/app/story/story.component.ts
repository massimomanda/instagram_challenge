import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilityService } from 'src/app/utility.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css'],
})
export class StoryComponent implements OnInit {
  constructor(
    public utility: UtilityService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  @Input('id') id!: number;
  @Input('class') class!: any;

  @Input('username') username!: string;

  ngOnInit(): void {}

  onStoryClick() {
    setTimeout(() => {
      this.router.navigate(['/story-detail', this.id, this.username]);
    }, 1);
  }
}
