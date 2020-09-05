import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleOneComponent } from './sample-one/sample-one.component';
import { SampleTwoFormComponent } from './sample-two-form/sample-two-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleOneComponent,
    SampleTwoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
