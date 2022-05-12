import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleItemHeaderComponent } from './single-item-header.component';

describe('SingleItemHeaderComponent', () => {
  let component: SingleItemHeaderComponent;
  let fixture: ComponentFixture<SingleItemHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleItemHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleItemHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
