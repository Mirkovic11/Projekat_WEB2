import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentdocComponent } from './equipmentdoc.component';

describe('EquipmentdocComponent', () => {
  let component: EquipmentdocComponent;
  let fixture: ComponentFixture<EquipmentdocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipmentdocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentdocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
