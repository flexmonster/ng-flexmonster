import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FlexmonsterPivotModule } from '../../dist/ng-flexmonster';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    FlexmonsterPivotModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
