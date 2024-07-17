import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
    getProducts() {
        return 'Retorna todos los Productos'
    }
}
