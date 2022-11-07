import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupermotInputNumberComponent } from './supermot-input-number.component';

describe('SupermotInputNumberComponent', () => {
  let component: SupermotInputNumberComponent;
  let fixture: ComponentFixture<SupermotInputNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupermotInputNumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupermotInputNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
