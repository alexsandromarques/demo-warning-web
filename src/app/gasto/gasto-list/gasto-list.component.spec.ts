import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GastoListComponent } from './gasto-list.component';

describe('GastoListComponent', () => {
  let component: GastoListComponent;
  let fixture: ComponentFixture<GastoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GastoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GastoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
