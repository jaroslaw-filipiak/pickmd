import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesBoxComponent } from './articles-box.component';

describe('ArticlesBoxComponent', () => {
  let component: ArticlesBoxComponent;
  let fixture: ComponentFixture<ArticlesBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlesBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
