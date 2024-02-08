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
  educationDetails = [
    {
      title: 'Vel Tech Institute of Science and Technology',
      duration: 'Btech (June 2018 - June 2022)',
      grade: '8.0/10',
      summary:
        'I have completed my edication in Vel-Tech Univercity In which I have Learnt many of the technical skills',
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
  ];
  achivementDetails=[
    {
      title: 'Generative AI for Software Engineers',
      duration: 'AWS Partner Course (Aug 2023)',
      grade: 'Team Project',
      summary:
      ``
    },
    {
      title: 'Online Railway Reservation System',
      duration: 'Major Project (2018)',
      grade: 'Team Project',
      summary:
      `Completed case study on Online Railway Reservation System where the users can be able to register and reserve , cancel and get the tickets sent
      to mail and be downloaded in pdf format where as admins can be able to add the trains, add the seats , update, delete and can view booking
      history of the users and the users can able to report or view the train status.
      created database using code first approach.
      Deployed the application in Azure.`
    }
  ]
}
