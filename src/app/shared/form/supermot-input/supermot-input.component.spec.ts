import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupermotInputComponent } from './supermot-input.component';

describe('SupermotInputComponent', () => {
  let component: SupermotInputComponent;
  let fixture: ComponentFixture<SupermotInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupermotInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupermotInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
