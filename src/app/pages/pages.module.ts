import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AngularMaterialModule } from '../angular-material.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, AngularMaterialModule],
  exports: [HomeComponent],
})
export class PagesModule {}
