import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupermotDropdownComponent } from './supermot-dropdown.component';

describe('SupermotDropdownComponent', () => {
  let component: SupermotDropdownComponent;
  let fixture: ComponentFixture<SupermotDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupermotDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupermotDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
