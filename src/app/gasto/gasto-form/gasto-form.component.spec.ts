import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GastoFormComponent } from './gasto-form.component';

describe('GastoFormComponent', () => {
  let component: GastoFormComponent;
  let fixture: ComponentFixture<GastoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GastoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GastoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
