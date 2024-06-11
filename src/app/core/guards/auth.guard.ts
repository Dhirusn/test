import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

export const AuthGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService)
  if(!authService.isAuthenticated()){
    inject(Router).navigate(['login'])
  }

  return authService.isAuthenticated()
}