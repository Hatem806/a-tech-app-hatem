import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceDurationComponent } from './resource-duration.component';

describe('ResourceDurationComponent', () => {
  let component: ResourceDurationComponent;
  let fixture: ComponentFixture<ResourceDurationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResourceDurationComponent]
    });
    fixture = TestBed.createComponent(ResourceDurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
