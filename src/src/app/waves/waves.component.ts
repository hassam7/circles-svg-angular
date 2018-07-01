import { Component, OnInit, Input } from '@angular/core';

interface circle {
  cx: number;
  cy: number;
  r: number;
}

@Component({
  selector: '[app-waves]',
  templateUrl: './waves.component.html',
  styleUrls: ['./waves.component.css']
})
export class WavesComponent implements OnInit {

  @Input() centerX;
  @Input() centerY;
  @Input() radius;
  @Input() noOfCircles;
  @Input() ampX;
  @Input() ampY;

  angle = 0;
  increment = Math.PI * 2 / (this.noOfCircles == undefined ? 10                                 : this.noOfCircles);

  circles: circle[] = [];
  constructor() { }

  ngOnInit() {
    this.draw()
  }

  ngOnChanges(changes) {
    this.circles = [];
    this.draw();
  }

  draw() {
    let plots = this.noOfCircles;
    let angle = this.angle;
    let increment = this.increment;
    let radius = this.radius;
    let circles = this.circles;
    for (var i = 0; i < plots; i++) {
      let x = this.ampX * Math.cos(angle) + this.centerX;
      let y = this.ampY * Math.sin(angle) + this.centerY;
      circles[i] = ({cx:x, cy:y, r:radius});
      angle += increment;
    }
  }

  clicked(i) {}

}