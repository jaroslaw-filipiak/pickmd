import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateSingleItemComponent } from './template-single-item.component';

describe('TemplateSingleItemComponent', () => {
  let component: TemplateSingleItemComponent;
  let fixture: ComponentFixture<TemplateSingleItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateSingleItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateSingleItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
