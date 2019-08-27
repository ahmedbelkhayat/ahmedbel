import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaypicComponent } from './displaypic.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('DisplaypicComponent', () => {
  let component: DisplaypicComponent;
  let fixture: ComponentFixture<DisplaypicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
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
