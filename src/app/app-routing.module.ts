import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaunchdetailsComponent } from './components/launchdetails/launchdetails.component';
import { LaunchListComponent } from './components/launchlist/launchlist.component';
import {YeardetailsComponent} from './components/yeardetails/yeardetails.component'

const routes: Routes = [
  { path: '', component: LaunchListComponent },
  { path: 'launch/:id', component: LaunchdetailsComponent },
  { path: 'year/:launch_year',component: YeardetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
