import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TokenRefreshService {

  constructor(private http: HttpClient) {
  }

  async isAccessTokenValid(): Promise<boolean> {
    const accessToken = localStorage.getItem('access_token');

    if (!accessToken) {
      return false
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${accessToken}`
      })
    };

    try {
      await this.http.post('http://localhost:8001/auth/token/verify/', {}, httpOptions).toPromise();
      return true;
    } catch (error) {
      return false;
    }
  }

  refreshAccessToken() {
    const refreshToken = localStorage.getItem('refresh_token'); // Fetch refresh token from localStorage

    if (refreshToken && !this.isAccessTokenValid()) {
      this.http.post<any>('http://localhost:8001/auth/token/refresh/', { token: refreshToken })
        .subscribe(
          (response: any) => {
            localStorage.setItem('access_token', response.access);
            localStorage.setItem('refresh_token', response.refresh);
          },
          (error: any) => {
            console.error('Token refresh failed', error);
          }
        );
    }
  }
}
