import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomListComponent } from './custom-list.component';

describe('CustomListComponent', () => {
  let component: CustomListComponent;
  let fixture: ComponentFixture<CustomListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomListComponent]
    });
    fixture = TestBed.createComponent(CustomListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
