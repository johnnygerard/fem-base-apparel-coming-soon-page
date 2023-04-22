import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SvgLogoComponent } from './svg-logo/svg-logo.component';
import { NgOptimizedImage, provideImageKitLoader } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { SvgErrorComponent } from './svg-error/svg-error.component';

@NgModule({
  declarations: [
    AppComponent,
    SvgLogoComponent,
    HeroComponent,
    FormComponent,
    SvgErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgOptimizedImage
  ],
  providers: [
    provideImageKitLoader('https://ik.imagekit.io/jgerard/fem-base-apparel-coming-soon-page')
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
