import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalizationBoxComponent } from './localization-box.component';

describe('LocalizationBoxComponent', () => {
  let component: LocalizationBoxComponent;
  let fixture: ComponentFixture<LocalizationBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalizationBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalizationBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
