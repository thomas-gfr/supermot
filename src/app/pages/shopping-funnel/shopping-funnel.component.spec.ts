import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingFunnelComponent } from './shopping-funnel.component';

describe('ShoppingFunnelComponent', () => {
  let component: ShoppingFunnelComponent;
  let fixture: ComponentFixture<ShoppingFunnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingFunnelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingFunnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
