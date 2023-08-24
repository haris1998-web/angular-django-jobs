import {Component, Input} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {JobDetailsModalComponent} from "../../modals/job-details-modal/job-details-modal.component";
import {BidModalComponent} from "../../modals/bid-modal/bid-modal.component";

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.sass']
})
export class JobCardComponent {
  @Input() job: any;

  constructor(private modalService: NgbModal) {}

  openJobDetailsModal() {
    const modalRef = this.modalService.open(JobDetailsModalComponent);
    modalRef.componentInstance.job = this.job;
  }

  openBidModal() {
    const modalRef = this.modalService.open(BidModalComponent);
    modalRef.componentInstance.job = this.job;
  }
}
