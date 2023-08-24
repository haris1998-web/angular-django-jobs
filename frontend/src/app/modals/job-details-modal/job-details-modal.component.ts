import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {HttpClient} from "@angular/common/http";

interface Bid {
  id: number,
  bid_text: string,
  job: number,
  user: number,
  user_info: object,
  bid_price: number,
}

@Component({
  selector: 'app-job-details-modal',
  templateUrl: './job-details-modal.component.html',
  styleUrls: ['./job-details-modal.component.sass']
})
export class JobDetailsModalComponent implements OnInit {
  @Input() job: any;
  bids: any[] = []

  constructor(public activeModal: NgbActiveModal, private http: HttpClient) {
  }

  closeModal() {
    this.activeModal.dismiss();
  }

  ngOnInit() {
    this.fetchBidsforJob(this.job.id);
  }

  fetchBidsforJob(jobId: number) {
    const httpOptions = {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      }
    };

    this.http.get(`http://localhost:8001/jobs/bids/${jobId}/bids_for_job`, httpOptions)
      .subscribe((response: any) => {
        this.bids = response;
      }, (error) => {
        console.log('Error fetching details', error)
      })
  }
}
