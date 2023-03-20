import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LoginResponse, OidcSecurityService } from 'angular-auth-oidc-client';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  returnUrl: string = '';
  accessToken: string = '';

  constructor(public oidcSecurityService: OidcSecurityService, private auth: AuthService, private route: ActivatedRoute) {
    this.route.queryParams
      .subscribe(params => {
        this.returnUrl = params['ReturnUrl'] ?? '';
      }
      );
  }

  ngOnInit(): void {
    this.oidcSecurityService
    .checkAuth()
    .subscribe((auth) => console.log('is authenticated',  auth));
  }


  onLogin() {
    this.oidcSecurityService.authorize();
  }

  
  onDo() {
    this.oidcSecurityService.getAccessToken().subscribe((val) => this.accessToken = val);
    this.oidcSecurityService.getRefreshToken().subscribe((val) => console.log(val) );
    
  }
}

