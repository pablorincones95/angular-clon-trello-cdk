import { Component, inject, signal, Input, computed } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { Subscription, debounceTime } from 'rxjs';
import { DataSourceProduct } from './data-source';
import { BtnComponent } from '../../components/btn/btn.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    NavbarComponent,
    CdkTableModule,
    CommonModule,
    BtnComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  @Input() category_id?: string;

  private subs$?: Subscription;

  public dataSource = new DataSourceProduct();
  public columns: string[] = ['#No', 'cover', 'name', 'price', 'actions'];

  public total = 0;

  public input = new FormControl('', { nonNullable: true });

  private productService = inject(ProductService);

  ngOnInit() {
    this.getProducts();

    this.input.valueChanges.pipe(debounceTime(300)).subscribe((value) => {
      console.log(value);
      this.dataSource.find(value);
    });
  }

  private getProducts(category_id?: string) {
    this.subs$ = this.productService.getProducts(this.category_id).subscribe({
      next: (products) => {
        this.dataSource.init(products);
        this.total = this.dataSource.getTotal();
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  update(product: Product) {
    this.dataSource.update(product.id, { price: 20 });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subs$?.unsubscribe();
    console.log('unsubscribe');
  }
}
