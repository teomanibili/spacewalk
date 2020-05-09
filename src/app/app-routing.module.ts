import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ResourcesComponent } from './resources/resources.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { examples } from './examples';
import { Workshop0Component } from './workshop0/workshop0.component';
import { Workshop1Component } from './workshop1/workshop1.component';
import { Workshop2Component } from './workshop2/workshop2.component';
import { Workshop3Component } from './workshop3/workshop3.component';
import { Workshop4Component } from './workshop4/workshop4.component';
import { Workshop5Component } from './workshop5/workshop5.component';
import { Workshop6Component } from './workshop6/workshop6.component';
import { Workshop7Component } from './workshop7/workshop7.component';
import { Workshop8Component } from './workshop8/workshop8.component';
import { Workshop9Component } from './workshop9/workshop9.component';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'menu', component: MainMenuComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'workshop-0', component: Workshop0Component },
  { path: 'workshop-1', component: Workshop1Component },
  { path: 'workshop-2', component: Workshop2Component },
  { path: 'workshop-3', component: Workshop3Component },
  { path: 'workshop-4', component: Workshop4Component },
  { path: 'workshop-5', component: Workshop5Component },
  { path: 'workshop-6', component: Workshop6Component },
  { path: 'workshop-7', component: Workshop7Component },
  { path: 'workshop-8', component: Workshop8Component },
  { path: 'workshop-9', component: Workshop9Component },
  ...examples,
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
