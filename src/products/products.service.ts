import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.model';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  insertProduct(title: string, description: string, price: number) {
    const prodId = Math.random().toString();
    const newProduct = new Product(prodId, title, description, price);
    try {
      this.products.push(newProduct);
      return prodId;
    } catch (e) {
      return e.toString();
    }
  }

  getAllProducts() {
    return [...this.products];
  }

  getSingleProduct(prodId: string) {
    const product = this.findProduct(prodId)[0];

    return { ...product };
  }

  updateProduct(
    prodId: string,
    title: string,
    description: string,
    price: number,
  ) {
    const [product, index] = this.findProduct(prodId);
    const updatedProduct = { ...product };
    if (title) {
      updatedProduct.title = title;
    }
    if (description) {
      updatedProduct.description = description;
    }
    if (price) {
      updatedProduct.price = price;
    }
    this.products[index] = updatedProduct;
  }

  deleteProduct(prodId: string) {
    const index = this.findProduct(prodId)[1];
    this.products.splice(index, 1);
  }

  private findProduct(prodId: string): [Product, number] {
    const productIndex = this.products.findIndex(
      (product) => product.id === prodId,
    );
    const product = this.products[productIndex];
    if (!product) {
      throw new NotFoundException('Cannot find product.');
    }

    return [product, productIndex];
  }
}
