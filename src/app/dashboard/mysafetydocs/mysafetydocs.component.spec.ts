import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MysafetydocsComponent } from './mysafetydocs.component';

describe('MysafetydocsComponent', () => {
  let component: MysafetydocsComponent;
  let fixture: ComponentFixture<MysafetydocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MysafetydocsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MysafetydocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
