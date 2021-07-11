import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkplanEquipmentComponent } from './workplan-equipment.component';

describe('WorkplanEquipmentComponent', () => {
  let component: WorkplanEquipmentComponent;
  let fixture: ComponentFixture<WorkplanEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkplanEquipmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkplanEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
