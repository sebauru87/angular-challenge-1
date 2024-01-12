import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { GreetingPipe } from './pipes/greeting.pipe';
import { HeaderComponent } from './components/layout/header/header.component';

@NgModule({
  imports: [HeaderComponent, CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [GreetingPipe],
  exports: [
    GreetingPipe,
    HeaderComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
