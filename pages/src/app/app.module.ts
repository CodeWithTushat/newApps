import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TClassDirective } from './t-class.directive';
import { RepeatDirective } from './repeat.directive';

@NgModule({
  declarations: [
    AppComponent,
    TClassDirective,
    RepeatDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
