import { Injectable } from '@nestjs/common';
import { IProduct } from 'src/interfaces/product.interface';

let products: IProduct[] = [
    {
        id: 1,
        name: 'IPhone 15',
        description: 'description 1',
        price: 350,
        stock: true,
        imgUrl: 'https://imagen.jpg'
    },
    {
        id: 2,
        name: 'Smartwatch',
        description: 'description 2',
        price: 200,
        stock: true,
        imgUrl: 'https://imagen.jpg'
    },
    {
        id: 3,
        name: 'Alexa',
        description: 'description 3',
        price: 150,
        stock: false,
        imgUrl: 'https://imagen.jpg'
    },
    {
        id: 4,
        name: 'Samsung galaxy s21',
        description: 'description 4',
        price: 280,
        stock: true,
        imgUrl: 'https://imagen.jpg'
    }
]

let id = 5

@Injectable()
export class ProductsRepository {
    async getProducts(page: number, limit: number): Promise<IProduct[]> {
        const start = (page-1) * limit
        const end = start + limit
        const productsList = products.slice(start, end)
        return productsList
    }

    async getProductById(id: number): Promise<IProduct> {
        const product = products.find(product => product.id === id)
        return product
    }

    async createProduct(newProduct: Omit<IProduct, 'id'>): Promise<string> {
        const product = {id, ...newProduct}
        id++
        products.push(product)
        return `Se creo producto con id:${product.id}`
    }

    async updateProduct(id: number, editedProduct: Partial<IProduct>): Promise<string> {
        products = products.map(product => {
            if(product.id === id) {
                return {...product, ...editedProduct}
            }
            return product
        })
        return `Se edito el producto con id: ${id}`
    }

    async deleteProduct(id: number): Promise<string> {
        products = products.filter(product => product.id !== id)
        return `Se elimino el producto con id: ${id}`
    }

}
