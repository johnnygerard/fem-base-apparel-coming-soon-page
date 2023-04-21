import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SvgLogoComponent } from './svg-logo/svg-logo.component';
import { NgOptimizedImage, provideImageKitLoader } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    SvgLogoComponent,
    HeroComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    NgOptimizedImage
  ],
  providers: [
    provideImageKitLoader('https://ik.imagekit.io/jgerard/fem-base-apparel-coming-soon-page')
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
