import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Keycloak modules
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';

// Keycloak services
import { initializeKeycloak } from './keycloak-init.factory';
import { ConfigInitService } from './config-init.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    KeycloakAngularModule,
  ],
  providers: [
    ConfigInitService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService, ConfigInitService]      
    }
  ],
})
export class AuthModule { }
