import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page403Component } from './page403.component';

describe('ProductComponent', () => {
  let component: Page403Component;
  let fixture: ComponentFixture<Page403Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page403Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Page403Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
