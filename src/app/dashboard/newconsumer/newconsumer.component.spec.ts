import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewconsumerComponent } from './newconsumer.component';

describe('NewconsumerComponent', () => {
  let component: NewconsumerComponent;
  let fixture: ComponentFixture<NewconsumerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewconsumerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewconsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
