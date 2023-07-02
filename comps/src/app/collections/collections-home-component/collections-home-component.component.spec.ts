import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionsHomeComponentComponent } from './collections-home-component.component';

describe('CollectionsHomeComponentComponent', () => {
  let component: CollectionsHomeComponentComponent;
  let fixture: ComponentFixture<CollectionsHomeComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollectionsHomeComponentComponent]
    });
    fixture = TestBed.createComponent(CollectionsHomeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
