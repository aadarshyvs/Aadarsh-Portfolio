import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience-resume.component.html',
  styleUrl: './experience-resume.component.scss',
})
export class ExperienceResumeComponent {
  projectDetails = {
    "title": "Projects",
    "detailsList": [
        {
            "title": "CHAMP \u2014 Enterprise Licensing Platform Migration",
            "duration": "Sep 2022 \u2013 Present",
            "grade": "Angular Frontend Architecture",
            "summary": "Sole architect and UI owner for a greenfield migration replacing ECMS and reducing licensing costs by 80%. Designed module structure, state management, REST API integration and Keycloak/MSAL authentication. Built server-side Ag-Grid Community pagination, sorting and filtering, CSV processing, XML-based ADI search, BPMN visualization and Drools rule configuration. Lazy loading and code splitting reduced initial load time by 30%."
        },
        {
            "title": "Security Report Aggregation Tool",
            "duration": "2024 \u2013 Present",
            "grade": "Internal Utility \u00b7 Angular Full Stack",
            "summary": "Built a centralized dashboard for security reports from Veracode, SonarQube and Prisma across the Cox account. Automated SonarQube reporting for 15 services, reducing manual effort from 2 hours to 5 minutes and helping teams track vulnerabilities and application health."
        },
        {
            "title": "NoSQL / Elasticsearch Data Management Dashboard",
            "duration": "2024 \u2013 Present",
            "grade": "Internal Utility \u00b7 Angular Full Stack",
            "summary": "Created an Ag-Grid index dashboard with health, document counts, store sizes and CSV export. Built a mapping-driven document explorer with field selection, advanced filters, raw JSON queries and Scroll API integration. Added document viewing, editing, saving and deletion, a typed HTTP service and configurable environments."
        }
    ]
};
  companyDetails = {
    "title": "Work Experience",
    "detailsList": [
        {
            "title": "Capgemini \u2014 Angular Tech Lead",
            "duration": "Sep 2022 \u2013 Present",
            "grade": "Senior Analyst grade",
            "summary": "Own frontend delivery from architecture and client requirements through UX decisions, code reviews and production deployments. Build enterprise interfaces with Angular, TypeScript, RxJS, Ag-Grid and advanced CSS. Mentor junior developers and maintain critical UI tests with Jasmine and Karma. Support Java/Spring REST endpoints, data contracts and auth token handling when needed. Use Claude, GPT, Windsurf and Codeium across the SDLC, achieving about 25% productivity gains. Received Innovation and Customer Delight awards."
        },
        {
            "title": "Capgemini \u2014 Analyst (Intern)",
            "duration": "Jan 2022 \u2013 Aug 2022",
            "grade": "Internship",
            "summary": "Contributed to database management, web development and API integration using ASP.NET MVC, SQL, HTML, Bootstrap and Git. Collaborated with senior developers and strengthened teamwork, time management and presentation skills through knowledge sharing and demos."
        }
    ]
};
}
