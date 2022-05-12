import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleItemOpinionsComponent } from './single-item-opinions.component';

describe('SingleItemOpinionsComponent', () => {
  let component: SingleItemOpinionsComponent;
  let fixture: ComponentFixture<SingleItemOpinionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleItemOpinionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleItemOpinionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
