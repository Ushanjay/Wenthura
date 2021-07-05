import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmFinanceComponent } from './adm-finance.component';

describe('AdmFinanceComponent', () => {
  let component: AdmFinanceComponent;
  let fixture: ComponentFixture<AdmFinanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmFinanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmFinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
