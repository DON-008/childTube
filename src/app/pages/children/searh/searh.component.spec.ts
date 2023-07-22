import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearhComponent } from './searh.component';

describe('SearhComponent', () => {
  let component: SearhComponent;
  let fixture: ComponentFixture<SearhComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearhComponent]
    });
    fixture = TestBed.createComponent(SearhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
