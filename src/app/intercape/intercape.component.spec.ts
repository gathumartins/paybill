import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntercapeComponent } from './intercape.component';

describe('IntercapeComponent', () => {
  let component: IntercapeComponent;
  let fixture: ComponentFixture<IntercapeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntercapeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntercapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
