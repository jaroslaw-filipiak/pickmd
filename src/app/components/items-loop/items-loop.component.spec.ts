import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsLoopComponent } from './items-loop.component';

describe('ItemsLoopComponent', () => {
  let component: ItemsLoopComponent;
  let fixture: ComponentFixture<ItemsLoopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsLoopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsLoopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
