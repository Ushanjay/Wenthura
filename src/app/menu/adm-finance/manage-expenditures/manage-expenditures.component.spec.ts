import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageExpendituresComponent } from './manage-expenditures.component';

describe('ManageExpendituresComponent', () => {
  let component: ManageExpendituresComponent;
  let fixture: ComponentFixture<ManageExpendituresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageExpendituresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageExpendituresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
