import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateTermsComponent } from './template-terms.component';

describe('TemplateTermsComponent', () => {
  let component: TemplateTermsComponent;
  let fixture: ComponentFixture<TemplateTermsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateTermsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
