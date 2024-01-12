import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private loggedInUser = new BehaviorSubject<any>(null);

  getUser = this.loggedInUser.asObservable();

  signIn(username: string, password: string): boolean {
    // Authenticate user (For simplicity, always return true)
    const isAuthenticated = true;

    if (isAuthenticated) {
      this.loggedInUser.next({ username });
    }

    return isAuthenticated;
  }

  signUp(username: string, password: string): boolean {
    // Register user (For simplicity, always return true)
    const isRegistered = true;

    if (isRegistered) {
      this.loggedInUser.next({ username });
    }

    return isRegistered;
  }

  getLoggedInUser() {
    return this.loggedInUser.asObservable();
  }
}
