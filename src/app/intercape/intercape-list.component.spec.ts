import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntercapeListComponent } from './intercape-list.component';

describe('IntercapeListComponent', () => {
  let component: IntercapeListComponent;
  let fixture: ComponentFixture<IntercapeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntercapeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntercapeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
