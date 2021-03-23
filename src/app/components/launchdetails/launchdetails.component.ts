import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { LaunchDetailsGQL } from '../../services/spacexGraphql.services';

@Component({
  selector: 'app-launchdetails',
  templateUrl: './launchdetails.component.html',
  styleUrls: ['./launchdetails.component.sass']
})

export class LaunchdetailsComponent {
  constructor(
    private readonly route: ActivatedRoute,
    private readonly launchDetailsService: LaunchDetailsGQL
  ) {}

  // fetch details by id from the params(id)
  launchDetails$ = this.route.paramMap.pipe(
    map((params) => params.get('id') as string),
    switchMap((id) => this.launchDetailsService.fetch({ id })),
    map((res) => res.data.launch)
  );
 
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