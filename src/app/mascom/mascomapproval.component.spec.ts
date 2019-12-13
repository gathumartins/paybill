import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MascomapprovalComponent } from './mascomapproval.component';

describe('MascomapprovalComponent', () => {
  let component: MascomapprovalComponent;
  let fixture: ComponentFixture<MascomapprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MascomapprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MascomapprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
