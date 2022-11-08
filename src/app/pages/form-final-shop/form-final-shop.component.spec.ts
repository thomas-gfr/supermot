import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFinalShopComponent } from './form-final-shop.component';

describe('FormFinalShopComponent', () => {
  let component: FormFinalShopComponent;
  let fixture: ComponentFixture<FormFinalShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormFinalShopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormFinalShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
