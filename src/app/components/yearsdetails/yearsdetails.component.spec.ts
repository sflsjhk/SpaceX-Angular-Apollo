import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearsdetailsComponent } from './yearsdetails.component';

describe('YearsdetailsComponent', () => {
  let component: YearsdetailsComponent;
  let fixture: ComponentFixture<YearsdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearsdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YearsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
