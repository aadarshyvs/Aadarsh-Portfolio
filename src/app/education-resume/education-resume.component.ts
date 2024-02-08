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
      grade: '8.0/10',
      summary:
        'I have completed my education in Vel-Tech university In which I have Learnt many of the technical skills',
    },
    {
      title: 'Sri Chaitanya Junior College',
      duration: 'Board of Intermediate Education (Apr 2016 - Apr 2018)',
      grade: '8.0/10',
      summary:
        'I have completed my Intermediate in Sri Chaitanya Junior College In which I have Specialised in Maths, Physics and Chemistry',
    },
    {
      title: 'Dr. K. k. R Gowtham School',
      duration: 'Board of Secondory Education (Apr 2016 - Apr 2018)',
      grade: '8.0/10',
      summary:
        'I have completed my Secondory Education in Dr. K. k. R Gowtham School In which I have learnt many of the standard subjects ',
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
