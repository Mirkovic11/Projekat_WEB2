import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkplanBasicinfoComponent } from './workplan-basicinfo.component';

describe('WorkplanBasicinfoComponent', () => {
  let component: WorkplanBasicinfoComponent;
  let fixture: ComponentFixture<WorkplanBasicinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkplanBasicinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkplanBasicinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
