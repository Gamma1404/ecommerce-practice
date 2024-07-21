import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { IProduct } from 'src/interfaces/product.interface';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}
    
    @Get()
    getProducts(@Query('page') page: string, @Query('limit') limit: string) {
        if(!page) page = '1'
        if(!limit) limit = '5'
        return this.productsService.getProducts(page, limit)
    }

    @Get(':id')
    getProductById(@Param('id') id: string) {
        return this.productsService.getProductById(id)
    }

    @Post()
    createProduct(@Body() newProduct: Omit<IProduct, 'id'>) {
        return this.productsService.createProduct(newProduct)
    }

    @Put(':id')
    updateProduct(@Param('id') id: string, @Body() editedProduct: Partial<IProduct>) {
        return this.productsService.updateProduct(id, editedProduct)
    }

    @Delete(':id')
    deleteProduct(@Param('id') id: string) {
        return this.productsService.deleteProduct(id)
    }
}
