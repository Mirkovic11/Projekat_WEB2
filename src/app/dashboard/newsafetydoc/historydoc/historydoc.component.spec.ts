import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorydocComponent } from './historydoc.component';

describe('HistorydocComponent', () => {
  let component: HistorydocComponent;
  let fixture: ComponentFixture<HistorydocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorydocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorydocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
