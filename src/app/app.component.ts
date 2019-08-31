import { Component, ViewChild, HostListener } from '@angular/core';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'lw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lenswords';
  @ViewChild(MenuComponent, {static: false})
  private menuComponent: MenuComponent;
  
  @HostListener('window:scroll', ['$event']) 
  scrollHandler(event) {
        window.scrollY > 300 ? (this.menuComponent.applyShadow =true) : (this.menuComponent.applyShadow =false);
  };

}
