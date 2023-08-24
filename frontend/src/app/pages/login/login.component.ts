import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface AuthResponse {
  access: string;
  refresh: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})

export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router, private http: HttpClient) {}

  login() {
    const credentials = {
      username: this.username,
      password: this.password
    };

    this.http.post<AuthResponse>('http://localhost:8001/auth/login/', credentials)
      .subscribe((response: AuthResponse) => {

          // Store tokens in localStorage
          localStorage.setItem('access_token', response.access);
          localStorage.setItem('refresh_token', response.refresh);

          // Navigate to the jobs page
          this.router.navigate(['/jobs']);
        },
        (error: any) => {
          console.log('Login failed', error);
        });
  }
}
