import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";
import {Error404Component} from "./error404/error404.component";



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    Error404Component
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    Error404Component
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
