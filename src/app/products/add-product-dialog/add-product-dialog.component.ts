import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-product-dialog',
  templateUrl: './add-product-dialog.component.html',
  styleUrls: ['./add-product-dialog.component.css'],
})
export class AddProductDialogComponent {
  Name!: string;
  Category!: string;
  Price!: number;
  Date!: Date;
  categories: string[] = ['Fruits', 'Electronics', 'Clothing', 'Books'];

  constructor(
    public dialogRef: MatDialogRef<AddProductDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onSave(): void {
    const productData = {
      Name: this.Name,
      Category: this.Category,
      Price: this.Price,
      Date: this.Date
    };

    this.dialogRef.close(productData);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
