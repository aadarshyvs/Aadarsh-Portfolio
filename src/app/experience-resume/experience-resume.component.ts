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
    title: 'Projects Detail',
    detailsList: [
      {
        title: 'Video Metadata & Content Processing, Validation and Publishing Platform',
        duration: '1 yr',
        grade: 'Bangalore',
        summary:
          `Worked as a UI Angular developer for this project and implemented MSAL Security using Keycloak, server-side data grids using Ag-Grid, workflow demonstration in UI and comparison of two XMLs, showing differences.
          `,
      },
      {
        title: 'Online Railway Reservation System',
        duration: '4 mos',
        grade: 'Virtual',
        summary: `I have successfully designed and implemented an Online Railway Reservation System, facilitating user registration, ticket reservation, cancellation and PDF ticket generation. Additionally, I incorporated admin functionalities for managing trains, seats and booking history, ensuring a comprehensive platform for both users and administrators. Utilizing a code-first approach, I created the database and deployed the application on Azure, demonstrating proficiency in Ms SQL Server, Visual Studio, .NET Framework, and API concepts for seamless system development and deployment.`,
      },
    ],
  };
  companyDetails = {
    title: 'Company Details',
    detailsList: [
      {
        title: 'Capgemini Full Time',
        duration: '1+ yrs',
        grade: 'Bangalore',
        summary:
          'Demonstrated proficiency in coding, debugging and collaborating within a team environment during 18 months of employment as a software developer in Capgemini',
      },
      {
        title: 'Capgemini Internship',
        duration: '4 mos',
        grade: 'Virtual',
        summary: `Served as an intern at a reputable company, actively learning and contributing to software development projects.
        Gained valuable practical insights in database management, web development and API integration throughout the internship duration.
      `,
      },
    ],
  };
}
