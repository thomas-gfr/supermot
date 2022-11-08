import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupermotCarouselComponent } from './supermot-carousel.component';

describe('SupermotCarouselComponent', () => {
  let component: SupermotCarouselComponent;
  let fixture: ComponentFixture<SupermotCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupermotCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupermotCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
