import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuComponent } from './menu/menu.component';
import { PollBoxComponent } from './poll-box/poll-box.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';
import { PollComponent } from './poll/poll.component';
import { SubmitPollBarComponent } from './submit-poll-bar/submit-poll-bar.component';
import { CookieService } from 'ngx-cookie-service';
import { PastTrialsViewComponent } from './past-trials-view/past-trials-view.component';
import { HowItWorksViewComponent } from './how-it-works-view/how-it-works-view.component';
import { LogInViewComponent } from './log-in-view/log-in-view.component';
import { CountdownComponent } from './countdown/countdown.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [	
    AppComponent,
    HeaderComponent,
    HomeViewComponent,
    MenuComponent,
    PollBoxComponent,
    CallToActionComponent,
    PollComponent,
    SubmitPollBarComponent,
    PastTrialsViewComponent,
    HowItWorksViewComponent,
    LogInViewComponent,
    CountdownComponent,
      FooterComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [ CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
