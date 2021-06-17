import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileRegisteredUsersComponent } from './profile-registered-users.component';

describe('ProfileRegisteredUsersComponent', () => {
  let component: ProfileRegisteredUsersComponent;
  let fixture: ComponentFixture<ProfileRegisteredUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileRegisteredUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileRegisteredUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
