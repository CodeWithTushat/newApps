import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModsAccordionComponent } from './mods-accordion.component';

describe('ModsAccordionComponent', () => {
  let component: ModsAccordionComponent;
  let fixture: ComponentFixture<ModsAccordionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModsAccordionComponent]
    });
    fixture = TestBed.createComponent(ModsAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
