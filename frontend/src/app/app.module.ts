import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { HttpClientModule } from '@angular/common/http';
import { JobCardComponent } from './components/job-card/job-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JobDetailsModalComponent } from './modals/job-details-modal/job-details-modal.component';
import { BidModalComponent } from './modals/bid-modal/bid-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    JobsComponent,
    JobCardComponent,
    JobDetailsModalComponent,
    BidModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
