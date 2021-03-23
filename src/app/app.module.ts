import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FormsModule} from '@angular/forms'
import { environment } from '../environments/environment';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule} from '@angular/material/button'
import { MatIconModule} from '@angular/material/icon'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './layout/header/header.component';
import { LaunchListComponent } from './components/launchlist/launchlist.component';
import { LaunchdetailsComponent } from './components/launchdetails/launchdetails.component';
import { SearchComponent } from './components/search/search.component';
import { YeardetailsComponent } from './components/yeardetails/yeardetails.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, LaunchListComponent, LaunchdetailsComponent, SearchComponent, YeardetailsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
    GraphQLModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
