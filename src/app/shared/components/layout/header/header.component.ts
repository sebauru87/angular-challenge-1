import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { AuthenticationService } from '../../../../core/services/authentication.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgFor, RouterLinkActive, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  message: { username: string } = { username: '' };

  constructor(private authService: AuthenticationService) {
    this.authService.getUser.subscribe((usr) => (this.message = usr));
  }
}
