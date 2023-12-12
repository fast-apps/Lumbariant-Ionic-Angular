import { ComponentFixture, TestBed } from '@angular/core/testing';

import { profilePage } from './profile.page';

describe('Tab3Page', () => {
  let component: profilePage;
  let fixture: ComponentFixture<profilePage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(profilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
