import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularInternshipComponent } from './angular-internship.component';

describe('AngularInternshipComponent', () => {
  let component: AngularInternshipComponent;
  let fixture: ComponentFixture<AngularInternshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularInternshipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularInternshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
