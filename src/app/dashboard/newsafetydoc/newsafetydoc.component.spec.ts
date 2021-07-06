import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsafetydocComponent } from './newsafetydoc.component';

describe('NewsafetydocComponent', () => {
  let component: NewsafetydocComponent;
  let fixture: ComponentFixture<NewsafetydocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsafetydocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsafetydocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
