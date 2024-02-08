import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EducationResumeComponent } from '../education-resume/education-resume.component';
import { ExperienceResumeComponent } from "../experience-resume/experience-resume.component";
import { AwardsResumeComponent } from "../awards-resume/awards-resume.component";

@Component({
    selector: 'app-my-resume',
    standalone: true,
    templateUrl: './my-resume.component.html',
    styleUrl: './my-resume.component.scss',
    imports: [FormsModule, ReactiveFormsModule, CommonModule, EducationResumeComponent, ExperienceResumeComponent, AwardsResumeComponent]
})
export class MyResumeComponent {
showingTab: any = 'Education';
}
