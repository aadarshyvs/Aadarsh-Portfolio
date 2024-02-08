import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';

export const routes: Routes = [
  {
    path: '**',
    component: AppComponent
},
{
  path: 'profile',
  component: ProfilePageComponent
}
];
