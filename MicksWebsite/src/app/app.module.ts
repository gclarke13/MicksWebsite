import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from "./Header/header.component";
import { ContactComponent } from "./Contact/contact.component";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    HeaderComponent,
    ContactComponent
  ]
})
export class AppModule { }
