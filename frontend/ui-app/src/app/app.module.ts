import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule, LogLevel } from 'angular-auth-oidc-client';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AuthModule.forRoot({
        config: {
        clientId: 'uiapp',
        authority: 'https://identityserver:8081',
        responseType: 'code',
        redirectUrl: `${window.location.origin}/login`,
        postLogoutRedirectUri: window.location.origin,
        postLoginRoute: '/login',
        scope: 'openid profile fullaccess offline_access',
        logLevel: LogLevel.Debug,
        silentRenew: true,
        useRefreshToken: true,
      }
    }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
