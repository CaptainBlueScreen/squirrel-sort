import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortPlotterComponent } from './sort-plotter.component';

describe('SortPlotterComponent', () => {
  let component: SortPlotterComponent;
  let fixture: ComponentFixture<SortPlotterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortPlotterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortPlotterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
