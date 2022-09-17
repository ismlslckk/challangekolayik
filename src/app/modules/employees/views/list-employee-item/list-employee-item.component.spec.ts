import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEmployeeItemComponent } from './list-employee-item.component';

describe('ListEmployeeItemComponent', () => {
  let component: ListEmployeeItemComponent;
  let fixture: ComponentFixture<ListEmployeeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEmployeeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEmployeeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
