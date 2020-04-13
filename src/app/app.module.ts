import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SortPlotterComponent } from './sort-plotter/sort-plotter.component';

@NgModule({
  declarations: [
    AppComponent,
    SortPlotterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
