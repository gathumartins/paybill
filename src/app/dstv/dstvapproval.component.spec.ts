import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DstvapprovalComponent } from './dstvapproval.component';

describe('DstvapprovalComponent', () => {
  let component: DstvapprovalComponent;
  let fixture: ComponentFixture<DstvapprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DstvapprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DstvapprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
