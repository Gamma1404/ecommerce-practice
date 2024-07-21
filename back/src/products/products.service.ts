import { Injectable } from '@nestjs/common';
import { ProductsRepository } from './products.repository';

@Injectable()
export class ProductsService {
    constructor(private readonly productsRepository: ProductsRepository) {}

    getProducts(page, limit) {
        return this.productsRepository.getProducts(Number(page), Number(limit))
    }

    getProductById(id: string) {
        return this.productsRepository.getProductById(Number(id))
    }

    createProduct(newProduct) {
        return this.productsRepository.createProduct(newProduct)
    }

    updateProduct(id: string, editedProduct) {
        return this.productsRepository.updateProduct(Number(id), editedProduct)
    }

    deleteProduct(id: string) {
        return this.productsRepository.deleteProduct(Number(id))
    }
}
