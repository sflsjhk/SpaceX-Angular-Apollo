import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchListComponent } from './launchlist.component';

describe('LaunchlistComponent', () => {
  let component: LaunchListComponent;
  let fixture: ComponentFixture<LaunchListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
