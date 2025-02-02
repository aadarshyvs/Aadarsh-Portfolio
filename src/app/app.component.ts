import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { MyResumeComponent } from './my-resume/my-resume.component';
import { MyHighlightsComponent } from './my-highlights/my-highlights.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,ProfilePageComponent,MyResumeComponent,MyHighlightsComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Aadarsh-Portfolio';
}
