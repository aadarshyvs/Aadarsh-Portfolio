import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EducationResumeComponent } from '../education-resume/education-resume.component';

@Component({
  selector: 'app-my-resume',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule,EducationResumeComponent],
  templateUrl: './my-resume.component.html',
  styleUrl: './my-resume.component.scss'
})
export class MyResumeComponent {
showingTab: any = 'Education';
}
