import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgErrorComponent } from './svg-error.component';

describe('SvgErrorComponent', () => {
  let component: SvgErrorComponent;
  let fixture: ComponentFixture<SvgErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvgErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
