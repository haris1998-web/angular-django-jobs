import {Component, OnInit} from '@angular/core';
import {interval} from "rxjs";
import {TokenRefreshService} from "./services/token-refresh.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'Jobs';

  constructor(private tokenRefreshService: TokenRefreshService) {}

  ngOnInit() {
    interval(55*60*1000).subscribe(() => {
      this.tokenRefreshService.refreshAccessToken();
    })
  }
}
