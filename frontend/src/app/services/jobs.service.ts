import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

interface Job {
  id: number;
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  private jobsSubject = new BehaviorSubject<Job[]>([]);
  public jobs$ = this.jobsSubject.asObservable();

  constructor(private http: HttpClient) {}

  fetchJobs() {
    const httpOptions = {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      }
    };

    this.http.get<Job[]>('http://localhost:8001/jobs/jobs/', httpOptions)
      .subscribe((jobs: Job[]) => {
        this.jobsSubject.next(jobs);
      }, (error: any) => {
        console.error('Jobs fetch failed', error);
      });
  }
}
