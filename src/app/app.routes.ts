import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HistoryComponent } from './pages/history/history.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
    {path:'', component: HomeComponent},
    {path:'history', component: HistoryComponent},
    {path:'about', component: AboutComponent}

];
