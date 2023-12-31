import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeComponent } from './attribute.component';

describe('AttributeComponent', () => {
  let component: AttributeComponent;
  let fixture: ComponentFixture<AttributeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttributeComponent]
    });
    fixture = TestBed.createComponent(AttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
