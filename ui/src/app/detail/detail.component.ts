import {Component, inject, signal} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AdService, JobDetail} from '../ad.service';


@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  private id: number | undefined = undefined;
  job = signal<JobDetail | undefined>(undefined);
  edit = signal(false);
  private adService: AdService = inject(AdService);

  constructor(private route: ActivatedRoute) {
  }

  public async ngOnInit() {
    this.route.queryParams.subscribe(async params => {
      this.id = params['id'];

      if(this.id){
        this.job.set(await this.adService.getJobDetail(this.id));
      }
    });

  }

  submitEdit() {
    console.log(this.id)
    void this.adService.updateJobTitleAndTextEN(this.id!, this.job()!.title, this.job()!.textEN);
  }

  editTitle(event: Event) {
    const target = event.target as HTMLElement;

    this.job.update(state => ({
      ...state!,
      title: target.innerText
    }));
  }

  editTranslation(event: Event) {
    const target = event.target as HTMLElement;

    this.job.update(state => ({
      ...state!,
      textEN: target.innerText
    }));
  }

}
