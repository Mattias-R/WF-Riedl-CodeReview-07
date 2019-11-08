import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MunichComponent } from './munich.component';

describe('MunichComponent', () => {
  let component: MunichComponent;
  let fixture: ComponentFixture<MunichComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MunichComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MunichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
