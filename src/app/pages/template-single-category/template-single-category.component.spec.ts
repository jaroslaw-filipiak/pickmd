import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateSingleCategoryComponent } from './template-single-category.component';

describe('TemplateSingleCategoryComponent', () => {
  let component: TemplateSingleCategoryComponent;
  let fixture: ComponentFixture<TemplateSingleCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateSingleCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateSingleCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
