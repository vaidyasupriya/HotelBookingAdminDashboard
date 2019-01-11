import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardProfilePageComponent } from './dashboard-profile-page.component';

describe('DashboardProfilePageComponent', () => {
  let component: DashboardProfilePageComponent;
  let fixture: ComponentFixture<DashboardProfilePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardProfilePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
