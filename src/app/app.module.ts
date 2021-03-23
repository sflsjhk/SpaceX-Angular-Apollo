import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LaunchdetailsComponent } from './components/launchdetails/launchdetails.component';
import { LaunchlistComponent } from './components/launchlist/launchlist.component';
import { SearchComponent } from './components/search/search.component';
import { HeaderComponent } from './layout/header/header.component';
import { YearsdetailsComponent } from './components/yearsdetails/yearsdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    LaunchdetailsComponent,
    LaunchlistComponent,
    SearchComponent,
    HeaderComponent,
    YearsdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
