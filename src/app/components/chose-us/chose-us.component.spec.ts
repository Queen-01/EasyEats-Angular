import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoseUsComponent } from './chose-us.component';

describe('ChoseUsComponent', () => {
  let component: ChoseUsComponent;
  let fixture: ComponentFixture<ChoseUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoseUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoseUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
