import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'sqsort-sort-plotter',
  templateUrl: './sort-plotter.component.html',
  styleUrls: ['./sort-plotter.component.css']
})
export class SortPlotterComponent implements OnInit, OnDestroy {

  points = [];
  count = 500;
  subscription: Subscription;

  constructor() {

  }

  ngOnInit(): void {
    for (let i = 0; i < this.count; i++) {
      this.points.push({
        x: 50 + Math.floor(Math.random() * 400),
        y: 50 + Math.floor(Math.random() * 200),
        r: 5 + Math.floor(Math.random() * 10),
        fill: '#' + Math.floor(Math.random() * 16777215).toString(16),
        stroke: '#' + Math.floor(Math.random() * 16777215).toString(16),
      });
    }

    const source = interval(1);
    this.subscription = source.subscribe(val => this.move());
  }

  ngOnDestroy() {
    this.subscription && this.subscription.unsubscribe();
  }

  move(): void {
    const i = Math.floor(Math.random() * this.count);
    this.points[i].x  = this.points[i].x + Math.floor(Math.random() * 4) - 2;
    this.points[i].y = this.points[i].y + Math.floor(Math.random() * 4)  - 2;
  }
}
