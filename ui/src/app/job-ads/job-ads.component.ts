import {Component, inject, InjectionToken, signal} from '@angular/core';
import {Ad, AdService} from '../ad.service';
import {RouterLink} from '@angular/router';


@Component({
  selector: 'app-job-ads',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './job-ads.component.html',
  styleUrl: './job-ads.component.css'
})

export class JobAdsComponent {
  ads = signal<Ad[] | undefined>(undefined);

  private AdService = inject(AdService);

  async ngOnInit() {
    this.ads.set(await this.AdService.getAds());
  }
}
