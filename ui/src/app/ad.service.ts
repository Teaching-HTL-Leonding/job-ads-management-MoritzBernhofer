import {inject, Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BASE_URL} from './app.config';
import {firstValueFrom} from 'rxjs';


export type Ad = {
  id: number,
  title: string,
  textEN: string,
}

type JobDetail = Ad & {
  translations: [
    language: string,
    translatedText: string
  ]
}


@Injectable({
  providedIn: 'root'
})

export class AdService {
  private httpClient: HttpClient = inject(HttpClient);
  private baseURL = inject(BASE_URL);

  public async getAds(): Promise<Ad[]> {
    return firstValueFrom(this.httpClient.get<Ad[]>(`${this.baseURL}/ads`));
  }

  public deleteAd(id: number) {
    this.httpClient.delete(`${this.baseURL}/ads/${id}`);
  }

  public async getJobDetail(id: number): Promise<JobDetail> {
    return firstValueFrom(this.httpClient.get<JobDetail>(`${this.baseURL}/ads/${id}`));
  }
}
