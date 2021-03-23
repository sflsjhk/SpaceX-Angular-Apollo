import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchdetailsComponent } from './launchdetails.component';

describe('LaunchdetailsComponent', () => {
  let component: LaunchdetailsComponent;
  let fixture: ComponentFixture<LaunchdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
