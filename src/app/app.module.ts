import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './shared/components/layout/header/header.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterOutlet,
    HeaderComponent,
    SharedModule,
  ],
  exports: [HeaderComponent],
  providers: [],
})
export class AppModule {}
