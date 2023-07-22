import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviewModalComponent } from './moview-modal.component';

describe('MoviewModalComponent', () => {
  let component: MoviewModalComponent;
  let fixture: ComponentFixture<MoviewModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoviewModalComponent]
    });
    fixture = TestBed.createComponent(MoviewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
