import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-awards-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './awards-resume.component.html',
  styleUrl: './awards-resume.component.scss'
})
export class AwardsResumeComponent {
  achivementDetails={
    title:'Professional Awards',
    detailsList:[
      {
        title: 'Innovation Award',
        duration: 'Feb 2024',
        grade: 'Capgemini',
        summary:
        `
        Awarded the Innovation Prize for innovating code from UI and introducing new functionalities that significantly enhance user experience.
        Recognized for groundbreaking contributions to code innovation from the UI level, leading to the integration of cutting-edge features that elevate user satisfaction.
        Received the Innovation Award for pioneering advancements in code development, resulting in enhanced user experience and improved functionality.
        `
      },
    {
      title: 'Customer Delight Award',
      duration: 'Sep 2023',
      grade: 'Capgemini',
      summary:
      `Received recognition for consistently earning high praise and satisfaction from clients, showcasing dedication to customer service excellence.
      Acknowledged within the company for consistently exceeding client expectations and fostering positive relationships, resulting in appreciation.
      Recognized for outstanding commitment to customer satisfaction, earning accolades for consistently delivering exceptional service and support.
      `
    },
  ]}
  otherDetails={
    title:'Other Awards',
    detailsList:[
      {
        title: `World's Largest Human Wheelchair Image Record Holder`,
        duration: 'Dec 2018',
        grade: 'GWR',
        summary:
        `
        Awarded the Innovation Prize for innovating code from UI and introducing new functionalities that significantly enhance user experience.
        Recognized for groundbreaking contributions to code innovation from the UI level, leading to the integration of cutting-edge features that elevate user satisfaction.
        Received the Innovation Award for pioneering advancements in code development, resulting in enhanced user experience and improved functionality.
        `
      },
    {
      title: 'Title: "Commendation for Gandhi Quiz Competition Engagement"',
      duration: 'Jul 2020',
      grade: 'NSS',
      summary:
      `Recognized for active participation in an online quiz competition focusing on the life of Gandhi, organized by NSS units of TKM College of Engineering.
      Engaged in commemorating Mahatma Gandhi's 150th Birth Anniversary by participating in an online quiz competition facilitated by the NSS cell of APJ Abdul Kalam Technological University.
      Contributed to celebrating Mahatma Gandhi's legacy by receiving recognition for participation in an online quiz competition organized by NSS units, highlighting his life and teachings.
      `
    },
  ]}
}
