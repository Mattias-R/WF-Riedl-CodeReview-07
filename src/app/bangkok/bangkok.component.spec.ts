import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BangkokComponent } from './bangkok.component';

describe('BangkokComponent', () => {
  let component: BangkokComponent;
  let fixture: ComponentFixture<BangkokComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BangkokComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BangkokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
