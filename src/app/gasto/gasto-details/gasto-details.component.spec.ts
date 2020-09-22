import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GastoDetailsComponent } from './gasto-details.component';

describe('GastoDetailsComponent', () => {
  let component: GastoDetailsComponent;
  let fixture: ComponentFixture<GastoDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GastoDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GastoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
