import {Component, OnInit} from '@angular/core';
import {JobsService} from "../../services/jobs.service";
import {Router} from "@angular/router";


interface Job {
  id: number;
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
}


@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.sass']
})

export class JobsComponent implements OnInit {
  jobs: Job[] = []
  constructor(public jobsService: JobsService, private router: Router) {}

  ngOnInit() {
    this.jobsService.fetchJobs()

    this.jobsService.jobs$.subscribe((jobs: Job[]) => {
      this.jobs = jobs;
    });
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');

    this.router.navigate(['/login']);
  }
}
