import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bid-modal',
  templateUrl: './bid-modal.component.html'
})
export class BidModalComponent {
  @Input() job: any;
  bidText: string = '';

  constructor(public activeModal: NgbActiveModal, private http: HttpClient) {}

  closeModal() {
    this.activeModal.dismiss();
  }

  placeBid() {
    const bidData = { bid_text: this.bidText };
    const httpOptions = {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      }
    };
    const url = `http://localhost:8001/jobs/bids/${this.job.id}/create_bid/`;

    this.http.post(url, bidData, httpOptions).subscribe(
      (response: any) => {
        console.log('Bid placed successfully', response);
        this.activeModal.close();
      },
      (error: any) => {
        console.error('Failed to place bid', error.error);
      }
    );
  }
}

