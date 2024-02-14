import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-education-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education-resume.component.html',
  styleUrl: './education-resume.component.scss',
})
export class EducationResumeComponent {
  educationDetails ={
    title:"Education Quality",
    detailsList:
    [
    {
      title: 'Vel Tech Institute of Science and Technology',
      duration: 'Btech (June 2018 - June 2022)',
      grade: '8.2/10',
      summary:
        'I have successfully completed my under graduation at Vel-Tech University, acquiring valuable technical skills along the way.',
    },
    {
      title: 'Sri Chaitanya Junior College',
      duration: 'Board of Intermediate Education (Apr 2016 - Apr 2018)',
      grade: '7.5/10',
      summary:
        `Completed Intermediate with specialization in Mathematics, Physics, and Chemistry at Sri Chaitanya Junior College, focusing on in-depth study and understanding of these subjects.`,
    },
    {
      title: 'Dr. K. k. R Gowtham School',
      duration: 'Board of Secondary Education (Apr 2016)',
      grade: '8.0/10',
      summary:
        'Completed Secondary Education at Dr. K. K. R Gowtham School, studying a variety of subjects essential for overall academic development.',
    },
  ]};
  achivementDetails={
    title:'Projects and Certifications',
    detailsList:[
    {
      title: 'Generative AI for Software Engineers',
      duration: 'AWS Partner Course (Aug 2023)',
      grade: 'Online Certification',
      summary:
      `Compleate a certification on Generative AI which talks about types of contents that Generative AI has
      also contains Foundation Models and the Amazon appications which uses these like Bedrok, EC2, Code Wispher and Sage Maker Jump Start
      `
    },
    {
      title: 'Online Clinic Management System',
      duration: 'Minor Project (Jun 202)',
      grade: 'Online Certification',
      summary:
      `Completed case study on Online Clinic Management System where the users can be able to register and book appointment in the website,
      Doctor can view and delete appointments also view the stock of medicines present in his Clinic,if there is less stock the request to send medicines
      is sent to the respective suppler and the suppler will send the stock to the clinic which is automatically added to the clinic stock.
      used the 3 Tier Architecture for building the project.
       Used ADO.NET System for the database connectivity.
       Got a internship certificate from Capgemini for this project`
    },
  ]}
}
