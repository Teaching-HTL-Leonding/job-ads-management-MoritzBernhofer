import {Routes} from '@angular/router';
import {JobAdsComponent} from './job-ads/job-ads.component';
import {DetailComponent} from './detail/detail.component';

export const routes: Routes = [
  {path: "jobAds", component: JobAdsComponent},
  {path: "jobAd/details", component: DetailComponent},
  {path: '', pathMatch: "full", redirectTo: "jobAds"}
];
