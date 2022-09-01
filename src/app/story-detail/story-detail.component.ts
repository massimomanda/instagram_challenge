import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-story-detail',
  templateUrl: './story-detail.component.html',
  styleUrls: ['./story-detail.component.css'],
})
export class StoryDetailComponent implements OnInit, AfterViewInit {
  constructor(
    public utility: UtilityService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  storyId: any;
  // time!:number;
  // interval:any
  larghezza: number = 0;
  width!: any;
  id: any = 0;
  i: any = 0;
  start: any;

  @ViewChild('myBar') myBar!: ElementRef;

  ngOnInit(): void {
    console.log('stringa');

    // this.move();

    this.route.params.subscribe((params) => {
      this.storyId = params;
      console.log(this.storyId);
    });

    // this.interval = setInterval(() => this.timer(), 1000)
  }

  ngAfterViewInit() {
    // this.elem = document.getElementById('myBar');
    // this.elem.style.width = '40%';
    console.log(this.myBar);
    this.move();
    // this.myBar.nativeElement.style.width = this.larghezza + '%';
  }

  move() {
    if (this.i == 0) {
      this.i = 1;
      this.larghezza = 6.66;
      // this.width = 1;
      this.start = Date.now();
      console.log(this.start);
      this.id = setInterval(() => this.frame(), 1000);
    }
  }
  frame() {
    // this.width = 1;
    if (this.larghezza >= 100) {
      clearInterval(this.id);
      this.router.navigate(['/main']);
      console.log(Date.now() - this.start);
      this.i = 0;
    } else {
      this.larghezza += 6.66;
      this.myBar.nativeElement.style.width = this.larghezza + '%';
    }
  }
}
