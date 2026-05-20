import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loginStatus = new BehaviorSubject<boolean>(
    !!localStorage.getItem('token')
  );

  login(username: string, password: string): void {
    // simulate API call
    localStorage.setItem('token', 'learnly-token-xyz');
    this.loginStatus.next(true);
  }

  logout(): void {
    localStorage.removeItem('token');
    this.loginStatus.next(false);
  }

  isLoggedIn(): BehaviorSubject<boolean> {
    return this.loginStatus;
  }
}
