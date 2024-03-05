import { Component, inject, signal, Input } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-scroll',
  standalone: true,
  imports: [NavbarComponent, ScrollingModule],
  templateUrl: './scroll.component.html',
  styleUrl: './scroll.component.scss',
})
export class ScrollComponent {
  @Input() category_id?: string;

  public products = signal<Product[]>([]);

  private productService = inject(ProductService);

  ngOnInit() {
    this.getProducts();
  }

  private getProducts(category_id?: string) {
    this.productService.getProducts(this.category_id).subscribe({
      next: (products) => {
        this.products.set(products);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
