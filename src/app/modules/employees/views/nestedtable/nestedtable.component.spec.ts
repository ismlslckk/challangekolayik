import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedtableComponent } from './nestedtable.component';

describe('NestedtableComponent', () => {
  let component: NestedtableComponent;
  let fixture: ComponentFixture<NestedtableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedtableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
