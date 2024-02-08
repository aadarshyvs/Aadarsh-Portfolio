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
        grade: 'Banglore',
        summary:
          `Worked as a UI Angular developer for this project and Implemented MSAL Security using Keycloak, Server-side Data Grids using Ag-Grid, Workflow demonstraction in UI, Comparison of two XMLs and showing differences
          `,
      },
      {
        title: 'Online Railway Reservation System',
        duration: '4 mos',
        grade: 'Virtual',
        summary: `Completed case study on Online Clinic Management System where the users can be able to register and book appointment in the website,
        Doctor can view and delete appointments also view the stock of medicines present in his Clinic,if there is less stock the request to send medicines
        is sent to the respective suppler and the suppler will send the stock to the clinic which is automatically added to the clinic stock.
        This project is buid with an 3 Tier Architecture and  ADO.NET System for the database connectivity
                  `,
      },
    ],
  };
  companyDetails = {
    title: 'Company Details',
    detailsList: [
      {
        title: 'Capgemini Full Time',
        duration: '1 yr 6 mos',
        grade: 'Banglore',
        summary:
          'Demonstrated proficiency in coding, debugging, and collaborating within a team environment during 18 months of employment as a software developer in Capgemini',
      },
      {
        title: 'Capgemini Internship',
        duration: '4 mos',
        grade: 'Virtual',
        summary: `Served as an intern at a reputable company, actively learning and contributing to software development projects.
        Gained valuable practical insights in database management, web development, and API integration throughout the internship duration.
      `,
      },
    ],
  };
}
