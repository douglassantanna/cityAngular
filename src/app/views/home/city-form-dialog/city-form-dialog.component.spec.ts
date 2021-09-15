import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityFormDialogComponent } from './city-form-dialog.component';

describe('CityFormDialogComponent', () => {
  let component: CityFormDialogComponent;
  let fixture: ComponentFixture<CityFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityFormDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
