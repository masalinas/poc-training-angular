import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  @ViewChild(MatDrawer) 
  drawer: MatDrawer;

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit() {
    setTimeout(() => {
      this.drawer.toggle();
    });
  }
}
