import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeViewComponent } from './home-view/home-view.component'
import { PastTrialsViewComponent } from './past-trials-view/past-trials-view.component'
import { HowItWorksViewComponent } from './how-it-works-view/how-it-works-view.component'
import { LogInViewComponent } from './log-in-view/log-in-view.component'

const routes: Routes = [
  { path: '', redirectTo: "/home", pathMatch: 'full' },
  { path: 'home', component: HomeViewComponent },
  { path: 'pastTrials', component:  PastTrialsViewComponent},
  { path: 'howItWorks', component: HowItWorksViewComponent },
  { path: 'logIn', component: LogInViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
