import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextRunComponent } from './next-run.component';

describe('NextRunComponent', () => {
  let component: NextRunComponent;
  let fixture: ComponentFixture<NextRunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextRunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextRunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
