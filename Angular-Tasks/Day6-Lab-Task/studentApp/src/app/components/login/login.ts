import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent implements OnInit {
  private authService = inject(AuthService);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  username: string = '';
  password: string = '';
  errorMessage: string = '';
  returnUrl: string = '/courses';

  ngOnInit(): void {
    // get return URL from query params
    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/courses';

    // if already logged in redirect away
    this.authService.isLoggedIn().subscribe((val) => {
      if (val) this.router.navigateByUrl(this.returnUrl);
    });
  }

  login(): void {
    if (!this.username || !this.password) {
      this.errorMessage = 'Please enter username and password';
      return;
    }
    this.authService.login(this.username, this.password);
    this.router.navigateByUrl(this.returnUrl);
  }
}
