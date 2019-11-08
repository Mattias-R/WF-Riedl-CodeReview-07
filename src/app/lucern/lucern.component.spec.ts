import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LucernComponent } from './lucern.component';

describe('LucernComponent', () => {
  let component: LucernComponent;
  let fixture: ComponentFixture<LucernComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LucernComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LucernComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
