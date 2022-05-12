import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsExtendedViewComponent } from './items-extended-view.component';

describe('ItemsExtendedViewComponent', () => {
  let component: ItemsExtendedViewComponent;
  let fixture: ComponentFixture<ItemsExtendedViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsExtendedViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsExtendedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
