import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lw-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  navbarCollapsed = true;
  applyShadow = false;
  constructor() { }

  ngOnInit() {
  }
  toggleNavbar(): void {
    this.navbarCollapsed = !this.navbarCollapsed;
  }

}
