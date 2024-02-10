import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills-resume.component.html',
  styleUrl: './skills-resume.component.scss'
})
export class SkillsResumeComponent {
  designSkillDetails = {
    title: 'Plugin Skill',
    skillsList: [
      {
        title:'Figma',
        Value:70
      },
      {
        title:'Photoshop',
        Value:90
      },
      {
        title:'Bootstrap',
        Value:100
      },
      {
        title:'Ag-Grid',
        Value:85
      },
      {
        title:'Keycloak',
        Value:85
      }
    ],
  };
  developmentSkillDetails = {
    title: 'Development Skill',
    skillsList: [
      {
        title:'Html',
        Value:95
      },
      {
        title:'CSS',
        Value:90
      },
      {
        title:'Angular',
        Value:85
      },
      {
        title:'Typescript',
        Value:85
      },
      {
        title:'Javascript',
        Value:85
      }
    ],
  };
}
