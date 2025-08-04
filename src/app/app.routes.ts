import { Routes } from '@angular/router';
import { App } from './app.component';
import { Dashboard } from './dashboard/dashboard.component';
import { Profile } from './profile/profile.component';

export const routes: Routes = [
    { path: '', component: App },
    { path: 'dashboard', component: Dashboard },
    { path: 'profile', component: Profile },
    { path: '**', redirectTo: '' }
];