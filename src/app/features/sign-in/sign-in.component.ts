import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { AuthenticationService } from '../../core/services/authentication.service';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, SharedModule],
})
export class SignInComponent implements OnInit {
  signInForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signInForm.reset({
      username: '',
      password: '',
    });
  }

  signIn() {
    if (this.signInForm.valid) {
      const isAuthenticated = this.authService.signIn(
        this.signInForm.value.username as string,
        this.signInForm.value.password as string
      );

      if (isAuthenticated) {
        this.router.navigate(['/profile']);
      }
    }
  }
}
