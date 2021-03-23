import {Component,OnInit} from '@angular/core'
import { LaunchListGQL } from '../../services/spacexGraphql.services';


@Component({
  selector: 'app-launchlist',
  templateUrl: './launchlist.component.html',
  styleUrls: ['./launchlist.component.sass'],
})

export class LaunchListComponent implements OnInit {;
  launchYear = '';
  launchListQuery = this.launchListService.watch({
    limit: 30
  });
  launchList: any[] = [];

  constructor(
    private launchListService: LaunchListGQL,
  ) {}

  // On initialization we are fetching data from the GraphQL server.
  ngOnInit(): void {
    this.launchListQuery.valueChanges.subscribe(({ data }) => {
      this.launchList = data.launchesPast!;
    });
  }
// Handle emit event
  handleResults(event: string){
      this.launchYear = event;
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
  
  // function to get data from Graphql Query.
  // Async
  async fetchMore(): Promise<void> {
    const { data } = await this.launchListQuery.fetchMore({
      variables: {
        year: this.launchYear
      },
    });
    this.launchList = [...this.launchList, ...data.launchesPast!];
  }

}
