import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvshowdetailsComponent } from './tvshowdetails.component';

describe('TvshowdetailsComponent', () => {
  let component: TvshowdetailsComponent;
  let fixture: ComponentFixture<TvshowdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TvshowdetailsComponent]
    });
    fixture = TestBed.createComponent(TvshowdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
