import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(
    private http: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  login() {
    const loginData = {
      email: this.email,
      password: this.password,
    };

    this.http.post('https://reqres.in/api/login', loginData).subscribe(
      (response: any) => {
        // Successful login
        this.snackBar.open('Login successful!', 'OK', { duration: 2000 });
        this.router.navigate(['/home']);
      },
      (error) => {
        // Failed login
        this.snackBar.open('Invalid email or password', 'OK', {
          duration: 2000,
        });
      }
    );
  }
}
