import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFaqComponent } from './template-faq.component';

describe('TemplateFaqComponent', () => {
  let component: TemplateFaqComponent;
  let fixture: ComponentFixture<TemplateFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateFaqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
