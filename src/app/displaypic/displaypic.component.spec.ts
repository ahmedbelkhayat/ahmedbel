import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaypicComponent } from './displaypic.component';

describe('DisplaypicComponent', () => {
  let component: DisplaypicComponent;
  let fixture: ComponentFixture<DisplaypicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaypicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaypicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
