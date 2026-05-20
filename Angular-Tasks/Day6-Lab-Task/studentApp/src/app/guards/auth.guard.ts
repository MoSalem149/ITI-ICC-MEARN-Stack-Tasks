import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  let isLoggedIn = false;

  authService.isLoggedIn().subscribe((val) => {
    isLoggedIn = val;
  });

  if (!isLoggedIn) {
    // redirect to login and pass the original URL to return after login
    router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }

  return true;
};
