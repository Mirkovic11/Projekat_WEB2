import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewincidentComponent } from './newincident.component';

describe('NewincidentComponent', () => {
  let component: NewincidentComponent;
  let fixture: ComponentFixture<NewincidentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewincidentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewincidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
