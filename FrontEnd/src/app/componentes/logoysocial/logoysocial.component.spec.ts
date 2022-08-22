import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoysocialComponent } from './logoysocial.component';

describe('LogoysocialComponent', () => {
  let component: LogoysocialComponent;
  let fixture: ComponentFixture<LogoysocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoysocialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoysocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
