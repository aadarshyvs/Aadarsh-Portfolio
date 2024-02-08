import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EducationResumeComponent } from '../education-resume/education-resume.component';
import { ExperienceResumeComponent } from "../experience-resume/experience-resume.component";

@Component({
    selector: 'app-my-resume',
    standalone: true,
    templateUrl: './my-resume.component.html',
    styleUrl: './my-resume.component.scss',
    imports: [FormsModule, ReactiveFormsModule, CommonModule, EducationResumeComponent, ExperienceResumeComponent]
})
export class MyResumeComponent {
showingTab: any = 'Education';
}
