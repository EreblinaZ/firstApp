import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddProductDialogComponent } from './add-product-dialog/add-product-dialog.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  constructor(private router: Router, private _dialog: MatDialog) {}

  menu_icon_variable: boolean = false;
  menuVariable: boolean = false;
  ngOnInit(): void {}
  openMenu() {
    this.menuVariable = !this.menuVariable;
    this.menu_icon_variable = !this.menu_icon_variable;
  }

  array: any = [
    { Name: 'Apple', Category: 'Fruits', Price: 120.0, Date: '01.01.2023' },
    {
      Name: 'iPhone',
      Category: 'Electronics',
      Price: 1400.0,
      Date: '02.01.2023',
    },
  ];

  openAddProductDialog() {
    const dialogRef = this._dialog.open(AddProductDialogComponent, {
      height: '450px',
      width: '500px',
    });

    dialogRef.afterClosed().subscribe((productData: any) => {
      if (productData) {
        this.array.push(productData);
        alert('Product added successfully!');
      }
    });
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
