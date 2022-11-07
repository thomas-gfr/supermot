import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupermotButtonComponent } from './supermot-button.component';

describe('SupermotButtonComponent', () => {
  let component: SupermotButtonComponent;
  let fixture: ComponentFixture<SupermotButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupermotButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupermotButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
