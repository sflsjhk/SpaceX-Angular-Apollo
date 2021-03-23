import {Component,OnInit} from '@angular/core';
import { LaunchListGQL } from '../../services/spacexGraphql.services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-yeardetails',
  templateUrl: './yeardetails.component.html',
  styleUrls: ['./yeardetails.component.sass'],
})

export class YeardetailsComponent implements OnInit {

  // ID fetched from the route.
  fetched_year = this.route.snapshot.params.launch_year;
  launchListQuery = this.launchListService.watch({
    limit:100,
    year: this.fetched_year
  });
  launchList: any[] = [];

  constructor(
    private launchListService: LaunchListGQL,
    private route: ActivatedRoute,

  ) {}
  

// Data Fetching from graphql
  ngOnInit(): void {
    this.launchListQuery.valueChanges.subscribe(({ data }) => {
      this.launchList = data.launchesPast!;
    });
  }

  // Check for mission status: Success or Failed
  missionStatus(status:Boolean): string {
    if (status){
      return "MISSION SUCCESS"
    }
    else {return "MISSION FAILED"}
  }

  // Change UTC time to local time
  utcToLocal(utcTime: string): string {
    const date = new Date(utcTime);
    return date.toLocaleString();
  }
  
}

