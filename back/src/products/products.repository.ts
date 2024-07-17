import { Injectable } from '@nestjs/common';
import { IProduct } from 'src/interfaces/product.interface';

const products: IProduct[] = [
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

@Injectable()
export class ProductsRepository {
    getProducts(): IProduct[] {
        return products
    }
}
