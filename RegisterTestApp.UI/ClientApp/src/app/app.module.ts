import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Registration } from './registration/registration.component';
import { AgeCheckDirective } from './directive/age-check.directive';
import { PhoneMaskDirective } from './directive/phone-mask.directive';

@NgModule({
  declarations: [
    AppComponent,
    Registration,
    AgeCheckDirective,
    PhoneMaskDirective
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: Registration, pathMatch: 'full' },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
