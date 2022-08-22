import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';

const oAuthConfig: AuthConfig = {
  issuer: 'https://accounts.google.com',
  strictDiscoveryDocumentValidation:false,
  redirectUri:"https://andii333.github.io/chat/",
  clientId:'742690112560-d85klpa5mm8926epf3i274ainelg7hpn.apps.googleusercontent.com',
  scope:'openid profile email'
}

@Injectable({
  providedIn: 'root'
})
export class GoogleApiService {

  constructor(private readonly oAuthService: OAuthService) { 
    oAuthService.configure(oAuthConfig)
    oAuthService.loadDiscoveryDocument().then( ()=> {
      oAuthService.tryLoginImplicitFlow().then( () => {
        if (!oAuthService.hasValidAccessToken()){
          oAuthService.initLoginFlow()
        } else {
          oAuthService.loadUserProfile().then( (userProfile) =>{
            console.log(JSON.stringify(userProfile));
            
          })
        }
      })
    })
  }
}
