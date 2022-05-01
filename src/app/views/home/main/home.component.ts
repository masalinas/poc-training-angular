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

  ngOnInit(): void { }

  ngAfterViewInit() {
    setTimeout(() => {
      this.drawer.toggle();
    });
  }

  logout() {
    this.authService.logout();
  }
}
