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
    "title": "Tools, Testing & Delivery",
    "skillsList": [
        {
            "title": "Ag-Grid Community, Bootstrap"
        },
        {
            "title": "Keycloak, MSAL, REST APIs"
        },
        {
            "title": "Jasmine, Karma"
        },
        {
            "title": "Git, Jenkins, Jira, SQL"
        },
        {
            "title": "Webpack / build optimization"
        },
        {
            "title": "Figma, Photoshop"
        },
        {
            "title": "Claude, GPT, Windsurf, Codeium"
        }
    ]
};
  developmentSkillDetails = {
    "title": "Frontend & Supporting Technologies",
    "skillsList": [
        {
            "title": "Angular, Standalone Components, Signals"
        },
        {
            "title": "TypeScript, JavaScript, RxJS"
        },
        {
            "title": "HTML, CSS (Flexbox, Grid)"
        },
        {
            "title": "Elasticsearch APIs, JSON, HTTP Client"
        },
        {
            "title": "Java / Spring (supporting backend tasks)"
        },
        {
            "title": "BPMN workflows, Drools rule configuration"
        }
    ]
};
}
