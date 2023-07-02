import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementHomeComponent } from './element-home.component';

describe('ElementHomeComponent', () => {
  let component: ElementHomeComponent;
  let fixture: ComponentFixture<ElementHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElementHomeComponent]
    });
    fixture = TestBed.createComponent(ElementHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
