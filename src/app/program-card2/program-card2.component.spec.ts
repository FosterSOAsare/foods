import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramCard2Component } from './program-card2.component';

describe('ProgramCard2Component', () => {
  let component: ProgramCard2Component;
  let fixture: ComponentFixture<ProgramCard2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgramCard2Component]
    });
    fixture = TestBed.createComponent(ProgramCard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
