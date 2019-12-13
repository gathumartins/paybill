import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BpcapprovalComponent } from './bpcapproval.component';

describe('BpcapprovalComponent', () => {
  let component: BpcapprovalComponent;
  let fixture: ComponentFixture<BpcapprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BpcapprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BpcapprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
