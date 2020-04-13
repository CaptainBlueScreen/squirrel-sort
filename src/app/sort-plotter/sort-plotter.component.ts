import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sqsort-sort-plotter',
  templateUrl: './sort-plotter.component.html',
  styleUrls: ['./sort-plotter.component.css']
})
export class SortPlotterComponent implements OnInit {

  points = [];

  constructor() {
    for (let i = 0; i < 500; i++) {
      this.points.push({
        x: 50 + Math.floor(Math.random() * 400),
        y: 50 + Math.floor(Math.random() * 400),
        r: 5 + Math.floor(Math.random() * 10),
      });
    }
  }

  ngOnInit(): void {

  }

}
