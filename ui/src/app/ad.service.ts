import {inject, Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BASE_URL} from './app.config';
import {first, firstValueFrom} from 'rxjs';


export type Ad = {
  id: number,
  title: string,
  textEN: string,
}

type translations = {
  language: string,
  translatedText: string
}

export type JobDetail = Ad & { translations: translations[] };


@Injectable({
  providedIn: 'root'
})

export class AdService {
  private httpClient: HttpClient = inject(HttpClient);
  private baseURL = inject(BASE_URL);

  async getAds(): Promise<Ad[]> {
    return firstValueFrom(this.httpClient.get<Ad[]>(`${this.baseURL}/ads`));
  }

  async deleteAd(id: number) {
    this.httpClient.delete(`${this.baseURL}/ads/${id}`);
  }

  async getJobDetail(id: number): Promise<JobDetail> {
    return firstValueFrom(this.httpClient.get<JobDetail>(`${this.baseURL}/ads/${id}`));
  }

  async updateJobTitleAndTextEN(id: number, title: string, textEN: string) {
    void firstValueFrom(this.httpClient.patch(`${this.baseURL}/ads/${id}`, {title, textEN}));
  }
}
