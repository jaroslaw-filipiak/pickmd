import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateHomepageComponent } from './template-homepage.component';

describe('TemplateHomepageComponent', () => {
  let component: TemplateHomepageComponent;
  let fixture: ComponentFixture<TemplateHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
