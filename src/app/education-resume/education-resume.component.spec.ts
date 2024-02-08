import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationResumeComponent } from './education-resume.component';

describe('EducationResumeComponent', () => {
  let component: EducationResumeComponent;
  let fixture: ComponentFixture<EducationResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationResumeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EducationResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
