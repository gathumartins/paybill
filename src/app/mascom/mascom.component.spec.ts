import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MascomComponent } from './mascom.component';

describe('MascomComponent', () => {
  let component: MascomComponent;
  let fixture: ComponentFixture<MascomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MascomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MascomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
