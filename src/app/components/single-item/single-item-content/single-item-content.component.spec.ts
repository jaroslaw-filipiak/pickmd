import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleItemContentComponent } from './single-item-content.component';

describe('SingleItemContentComponent', () => {
  let component: SingleItemContentComponent;
  let fixture: ComponentFixture<SingleItemContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleItemContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleItemContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
