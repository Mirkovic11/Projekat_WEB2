import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkplanHistoryComponent } from './workplan-history.component';

describe('WorkplanHistoryComponent', () => {
  let component: WorkplanHistoryComponent;
  let fixture: ComponentFixture<WorkplanHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkplanHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkplanHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
