import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeniaComponent } from './kenia.component';

describe('KeniaComponent', () => {
  let component: KeniaComponent;
  let fixture: ComponentFixture<KeniaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeniaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
