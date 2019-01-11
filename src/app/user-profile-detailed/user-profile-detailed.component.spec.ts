import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileDetailedComponent } from './user-profile-detailed.component';

describe('UserProfileDetailedComponent', () => {
  let component: UserProfileDetailedComponent;
  let fixture: ComponentFixture<UserProfileDetailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileDetailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
