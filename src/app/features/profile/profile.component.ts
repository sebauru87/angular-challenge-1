import { Component } from '@angular/core';

import { AuthenticationService } from '../../core/services/authentication.service';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  user: { username: string } = { username: '' };

  constructor(private authService: AuthenticationService) {
    this.authService.getUser.subscribe((usr) => (this.user = usr));
  }
}
