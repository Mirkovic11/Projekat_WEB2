import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultimediadocComponent } from './multimediadoc.component';

describe('MultimediadocComponent', () => {
  let component: MultimediadocComponent;
  let fixture: ComponentFixture<MultimediadocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultimediadocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultimediadocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
