import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { AuthenticationService } from '../services/authentication.service';

export const signInGuard: CanActivateFn = () => {
  const router = inject(Router);
  const authService = inject(AuthenticationService);
  let user = null;

  authService.getLoggedInUser().subscribe((usr) => {
    if (usr) user = usr;
  });

  if (user) {
    return true;
  } else {
    router.navigate(['sign-in']);
    return false;
  }
};
