import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YeardetailsComponent } from './yeardetails.component';

describe('YeardetailsComponent', () => {
  let component: YeardetailsComponent;
  let fixture: ComponentFixture<YeardetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YeardetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YeardetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
