import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carouselbasic',
  templateUrl: './carouselbasic.component.html',
  styleUrls: ['./carouselbasic.component.css']
})
export class CarouselbasicComponent implements OnInit {
  showNavigationArrows = false;
  showNavigationIndicators = false;
  images = [700, 533, 807].map((n) => `https://picsum.photos/id/${n}/900/500`);
  constructor() { }

  ngOnInit() {
  }

}
