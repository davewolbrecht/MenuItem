import { Component } from '@angular/core';
import { MenuItem } from './models/menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Menu';
  menuItems:Array<MenuItem> = new Array<MenuItem>();
  /**
   *
   */
  constructor() {
    this.menuItems.push({item:"Chicken Fingers",category:"dinner",price:11.99})
    this.menuItems.push({item:"Pizza",category:"dinner",price:11.99})
    this.menuItems.push({item:"Wings",category:"sides",price:11.99})
    this.menuItems.push({item:"Breadsticks",category:"sides",price:11.99})
    this.menuItems.push({item:"Ceasar Salads",category:"salads",price:11.99})
    this.menuItems.push({item:"Cinnamon Roll",category:"dessert",price:11.99})
  }

}
