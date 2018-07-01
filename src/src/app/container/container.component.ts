import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  @Input() width;
  @Input() height;

  centerX = (this.width == undefined ? 250: this.width/2);
  centerY = (this.height == undefined ? 250: this.height/2);
  

  noOfCircles = 10;
  radius = 10;
  ampX = 10;
  ampY = 10;

  selected = null;


  constructor() { }

  ngOnInit() {
  }

  clicked(index) {
  }

}