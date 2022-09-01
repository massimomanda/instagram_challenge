import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-story-detail',
  templateUrl: './story-detail.component.html',
  styleUrls: ['./story-detail.component.css'],
})
export class StoryDetailComponent implements OnInit {
  constructor(
    public utility: UtilityService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  storyId: any;
  larghezza: number = 0;
  // width!: any;
  // id: any = 0;
  // i: any = 0;

  elem: any;
  @ViewChild('myBar') myBar!: ElementRef;
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.storyId = params;
      console.log(this.storyId);
    });
    setInterval(this.larghezzaPiuUno, 1000);
  }
  ngAfterViewInit() {
    // this.elem = document.getElementById('myBar');
    // this.elem.style.width = '40%';
    console.log(this.myBar);
    // setTimeout(() => {
    //   this.router.navigate(['/main']);
    // }, 1000);
    // this.move();
    this.myBar.nativeElement.style.width = this.larghezza + '%';
  }
  // move() {
  //   if (this.i == 0) {
  //     this.i = 1;
  //     var larghezza = 1;
  //     // this.width = 1;
  //     this.id = setInterval(this.frame, 30);
  //   }
  //   frame() {
  //     // this.width = 1;
  //     if (larghezza >= 100) {
  //       clearInterval(this.id);
  //       this.i = 0;
  //     } else {
  //       larghezza + 1;
  //       this.myBar.nativeElement.style.width = larghezza + '%';
  //     }
  //   }
  // }
  larghezzaPiuUno() {
    this.larghezza += 1;
    console.log(this.larghezza);
  }
}
