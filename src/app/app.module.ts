// Angular modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// App modules
import { AppRoutingModule } from './app-routing.module';

import { AuthModule } from '@app/shared/auth/auth.module';
import { HomeModule } from '@app/views/home/home.module';

// App component
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,        
    AuthModule,
    HomeModule,    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
