import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsResumeComponent } from './skills-resume.component';

describe('SkillsResumeComponent', () => {
  let component: SkillsResumeComponent;
  let fixture: ComponentFixture<SkillsResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsResumeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkillsResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
