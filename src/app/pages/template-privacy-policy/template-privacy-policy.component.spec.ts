import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatePrivacyPolicyComponent } from './template-privacy-policy.component';

describe('TemplatePrivacyPolicyComponent', () => {
  let component: TemplatePrivacyPolicyComponent;
  let fixture: ComponentFixture<TemplatePrivacyPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplatePrivacyPolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatePrivacyPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
