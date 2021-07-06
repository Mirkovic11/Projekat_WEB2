import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicinfodocComponent } from './basicinfodoc.component';

describe('BasicinfodocComponent', () => {
  let component: BasicinfodocComponent;
  let fixture: ComponentFixture<BasicinfodocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicinfodocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicinfodocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
