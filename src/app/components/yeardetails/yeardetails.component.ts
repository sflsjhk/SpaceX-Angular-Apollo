import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { LaunchListGQL } from '../../services/spacexGraphql.services';
import { YearDetailsGQL } from '../../services/spacexGraphql.services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-yeardetails',
  templateUrl: './yeardetails.component.html',
  styleUrls: ['./yeardetails.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
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
    private yearDetailsService: YearDetailsGQL,
    private route: ActivatedRoute,
    private changeDetect: ChangeDetectorRef

  ) {}
  

  /**
   * On initialization we are fetching data from the GraphQL server.
   */
  ngOnInit(): void {
    this.launchListQuery.valueChanges.subscribe(({ data }) => {
      this.launchList = data.launchesPast!;
      this.update();
    });

  }
  update(): void {
    this.changeDetect.detectChanges();
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

