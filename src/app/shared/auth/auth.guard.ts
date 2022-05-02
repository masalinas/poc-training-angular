import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';

@Injectable({ providedIn: 'root' })
export class AuthGuard extends KeycloakAuthGuard {  
  constructor(router: Router, protected readonly keycloak: KeycloakService) {
    super(router, keycloak);
  }
  
  async isAccessAllowed(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean | UrlTree> {    
    // control authenticated user status
    if (!this.authenticated) {
      await this.keycloak.login({
        redirectUri: window.location.origin + state.url,
      });
    }
    
    // control authorization user roles
    if (!route.data['roles'].some((role: string) => this.roles.includes(role))) {      
      //this.router.navigate(['page403']);
      return false;
    }

    return this.authenticated;
  }
}