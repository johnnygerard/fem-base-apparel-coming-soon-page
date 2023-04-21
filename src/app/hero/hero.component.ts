import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  private readonly ikBaseURL = 'https://ik.imagekit.io/jgerard/fem-base-apparel-coming-soon-page';
  private readonly breakpoints = [16, 32, 48, 64, 96, 128, 256, 384, 640, 750, 828, 1080, 1200, 1920, 2048, 3840];

  getSrcSet(src: string): string {
    return this.breakpoints
      .map(breakpoint => `${this.ikBaseURL}/tr:w-${breakpoint}/${src} ${breakpoint}w`)
      .join(', ');
  }
}
