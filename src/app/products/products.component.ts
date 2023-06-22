import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})

export class ProductsComponent {
  constructor(private router: Router) {}
  menu_icon_variable: boolean = false;
  menuVariable: boolean = false;
  ngOnInit(): void {}
  openMenu() {
    this.menuVariable = !this.menuVariable;
    this.menu_icon_variable = !this.menu_icon_variable;
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
