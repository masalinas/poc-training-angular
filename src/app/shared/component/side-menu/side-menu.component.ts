import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onDashboardClick() {
    this.router.navigateByUrl('/home/dashboard');
  }

  onProductClick() {
    this.router.navigateByUrl('/home/product');
  }

  onSettingsClick () {
    this.router.navigateByUrl('/home/settings');
  }
}
