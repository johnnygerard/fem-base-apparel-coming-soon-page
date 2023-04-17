import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SvgLogoComponent } from './svg-logo/svg-logo.component';
import { NgOptimizedImage, provideImageKitLoader } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    SvgLogoComponent
  ],
  imports: [
    BrowserModule,
    NgOptimizedImage
  ],
  providers: [
    provideImageKitLoader('https://ik.imagekit.io/jgerard')
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
