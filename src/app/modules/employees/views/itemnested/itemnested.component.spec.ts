import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemnestedComponent } from './itemnested.component';

describe('ItemnestedComponent', () => {
  let component: ItemnestedComponent;
  let fixture: ComponentFixture<ItemnestedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemnestedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemnestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
