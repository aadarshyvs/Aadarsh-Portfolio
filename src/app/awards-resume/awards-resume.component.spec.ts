import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardsResumeComponent } from './awards-resume.component';

describe('AwardsResumeComponent', () => {
  let component: AwardsResumeComponent;
  let fixture: ComponentFixture<AwardsResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AwardsResumeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AwardsResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
