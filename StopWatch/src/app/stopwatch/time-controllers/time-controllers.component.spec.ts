import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeControllersComponent } from './time-controllers.component';

describe('TimeControllersComponent', () => {
  let component: TimeControllersComponent;
  let fixture: ComponentFixture<TimeControllersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeControllersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeControllersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
