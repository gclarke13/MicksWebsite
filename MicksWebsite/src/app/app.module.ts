import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from "./Header/header.component";
import { AboutComponent } from "./About/about.component";
import { PortfolioComponent } from "./Portfolio/portfolio.component";
import { FeedbackComponent } from "./Feedback/feedback.component";
import { ContactComponent } from "./Contact/contact.component";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    PortfolioComponent,
    FeedbackComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    PortfolioComponent,
    FeedbackComponent,
    ContactComponent
  ]
})
export class AppModule { }
