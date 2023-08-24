import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.sass']
})
export class PostJobComponent {
  jobTitle: string = '';
  jobDescription: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  submitJob(){
    const jobData = {
      title: this.jobTitle,
      description: this.jobDescription
    };

    const httpOptions = {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      }
    };

    this.http.post('http://localhost:8001/jobs/jobs/', jobData, httpOptions)
      .subscribe(
        response => {
          console.log('Job posted successfully', response);
          this.jobTitle = '';
          this.jobDescription = '';

          this.router.navigate(['jobs'])
        },
        error => {
          console.error('Job posting failed', error);
        }
      );
  }
}
