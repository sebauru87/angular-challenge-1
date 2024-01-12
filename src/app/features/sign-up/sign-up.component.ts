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
  templateUrl: './sign-up.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, SharedModule],
})
export class SignUpComponent implements OnInit {
  signUpForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signUpForm.reset({
      username: '',
      password: '',
    });
  }

  signUp() {
    if (this.signUpForm.valid) {
      const isAuthenticated = this.authService.signUp(
        this.signUpForm.value.username as string,
        this.signUpForm.value.password as string
      );
      if (isAuthenticated) {
        this.router.navigate(['/profile']);
      }
    }
  }
}
