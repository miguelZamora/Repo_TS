import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ContadorComponent } from './contador/contador.component';
import { LoginPageComponent } from './login/login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    LoginPageComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
