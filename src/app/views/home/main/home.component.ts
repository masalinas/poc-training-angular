import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav'

import { AuthService } from '@app/shared/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  @ViewChild(MatDrawer) 
  drawer: MatDrawer;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    this.getUserProfile();
  }

  ngAfterViewInit(): void  {
    setTimeout(() => {
      this.drawer.toggle();
    });
  }

  getUserProfile(): void {
    this.authService.loadUserProfile()
    .then((userProfile) => {
      // log ID Token
      console.log(userProfile);

      // log get roles from Access Token
      console.log(this.authService.getRoles());
    })
    .catch((error) => {
      console.log("Promise rejected with " + JSON.stringify(error));
    });
  }
  
  logout(): void {
    this.authService.logout();
  }
}
